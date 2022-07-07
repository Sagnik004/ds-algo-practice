/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/equilibrium-point-1587115620/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given an array A of n positive numbers. The task is to find the first Equilibium Point
  in the array. Equilibrium Point in an array is a position such that the sum of elements 
  before it is equal to the sum of elements after it.
  Note: Retun the index of Equilibrium point. (1-based index)

  Example:
  1) A = [1,3,5,2,2]; output = 2 (i.e. el = 5)
  2) A = [1]; output = 0

*/

// ******************************************************************** //
//              Solution_1 [TC = O(n^2), SC = O(1)]                     //
// ******************************************************************** //

/**
 * Find equilibrium point (naive approach)
 * @param {Array} arr
 * @returns {number}
 */
function equilibriumPoint_1(arr) {
  if (!arr || arr.length < 1) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

console.log('========= Results =========');
console.log(equilibriumPoint_1([1, 3, 5, 2, 2]));
console.log(equilibriumPoint_1([1]));
console.log(equilibriumPoint_1([-7, 1, 5, 2, -4, 3, 0]));

// ******************************************************************** //
//                  Solution_1 [TC = O(n), SC = O(1)]                   //
// ******************************************************************** //

/**
 * Find equilibrium point (optimized approach)
 * @param {Array} arr
 * @returns {number}
 */
function equilibriumPoint_2(arr) {
  if (!arr || arr.length < 1) {
    return -1;
  }

  let sum = 0, leftSum = 0;

  sum = arr.reduce((acc, cur) => (acc + cur), 0);
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (sum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

console.log('========= Results =========');
console.log(equilibriumPoint_2([1, 3, 5, 2, 2]));
console.log(equilibriumPoint_2([1]));
console.log(equilibriumPoint_2([-7, 1, 5, 2, -4, 3, 0]));
