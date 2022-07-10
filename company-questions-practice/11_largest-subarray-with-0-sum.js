/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given an array having both positive and negative integers. The task is 
  to compute the length of the largest subarray with sum 0.

  Example:
  1) A = [15,-2,2,-8,1,7,10,23]; output = 5 (2,2,-8,1,7)
  2) A = [1,2,3]; output = 0 (No sub-array with sum = 0)

*/

// ******************************************************************** //
//              Solution_1 [TC = O(n^2), SC = O(1)]                     //
// ******************************************************************** //

/**
 * Largest sub-array with sum = 0 (naive approach)
 * @param {Array} arr
 * @returns {number}
 */
function maxLen_1(arr) {
  if (!arr || arr.length < 1) {
    return 0;
  }

  const arrLength = arr.length;
  let maxLength = 0;

  for (let i = 0; i < arrLength; i++) {
    let curSum = 0;
    for (let j = i; j < arrLength; j++) {
      curSum += arr[j];
      if (curSum === 0) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  console.log(`Max length is: ${maxLength}`);
  return maxLength;
}

console.log('========= Results =========');
maxLen_1([15, -2, 2, -8, 1, 7, 10, 23]);
maxLen_1([1, 2, 3]);


// ******************************************************************** //
//                  Solution_2 [TC = O(n), SC = O(n)]                   //
// ******************************************************************** //

// https://youtu.be/_yGf2rxwZlA
/**
 * Largest sub-array with sum = 0 (smart approach using HashMap)
 * @param {Array} arr
 * @returns {Array}
 */
function maxLen_2(arr) {
  if (!arr || arr.length < 1) {
    return 0;
  }

  const arrLength = arr.length;
  let map = new Map();
  let maxLength = 0, sum = 0;

  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];

    if (arr[i] === 0 && maxLength === 0) {
      maxLength = 1;
    }

    if (sum === 0) {
      maxLength = i + 1;
    }

    const prevI = map.get(sum);
    if (prevI != null) {
      maxLength = Math.max(maxLength, i - prevI);
    } else {
      map.set(sum, i);
    }
  }

  console.log(`Max length is: ${maxLength}`);
  return maxLength;
}

console.log('========= Results =========');
maxLen_2([15, -2, 2, -8, 1, 7, 10, 23]);
maxLen_2([1, 2, 3]);
