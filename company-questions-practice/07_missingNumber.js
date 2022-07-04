/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1/?page=1&curated[]=1&sortBy=submissions  

  **** Statement ****
  Given an array of size N-1 such that it only contains distinct integers in the 
  range of 1 to N. Find the missing element.

  Example:
  1) A = [1,2,3,5]; output = 4
  2) A = [6,1,2,8,3,4,7,10,5]; output = 9

*/

// ******************************************************************** //
//                Solution_1 [TC = O(n), SC = O(n)]                     //
// ******************************************************************** //

/**
 * Missing number (naive approach)
 * @param {Array} arr
 * @param {number} n
 * @returns {number}
 */
function missingNumber_1(arr, n) {
  if (!arr || n < 1) {
    return;
  }

  let numMap = new Map();
  arr.forEach((el) => {
    if (numMap.get(el) == null) {
      numMap.set(el, true);
    }
  });

  for (let i = 1; i <= n; i++) {
    if (!numMap.has(i)) {
      return i;
    }
  }
}

console.log('Results:');
console.log(missingNumber_1([1,2,3,5], 5));
console.log(missingNumber_1([6,1,2,8,3,4,7,10,5], 10));


// ******************************************************************** //
//                Solution_2 [TC = O(N), SC = O(1)]                     //
// ******************************************************************** //

/**
 * Missing number (naive approach)
 * @param {Array} arr
 * @param {number} n
 * @returns {number}
 */
function missingNumber_2(arr, n) {
  if (!arr || n < 1) {
    return;
  }

  const sumN = (n * (n + 1)) / 2;
  const total = arr.reduce((prev, cur) => (prev + cur), 0);

  return (sumN - total);
}

console.log('Results:');
console.log(missingNumber_2([1,2,3,5], 5));
console.log(missingNumber_2([6,1,2,8,3,4,7,10,5], 10));
