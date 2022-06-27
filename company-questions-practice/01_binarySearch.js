/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1/?page=1&curated[]=1&sortBy=submissions
  
  **** Statement ****
  Given a sorted array of size N and an integer K, find the position at 
  which K is present in the array using binary search.

  Example:
  1) K = 4, arr = [1,2,3,4,5]; output = 3
  2) K = 445, arr = [11,22,33,44,55]; output = -1

*/

// ******************************************************************** //
//                     TC = O(logN), SC = O(1)                          //
// ******************************************************************** //

/**
 * Find k in arr using binary search iterative approach
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 * @param {number} k
 * @returns {number}
 */
function binSearchIter(arr, start, end, k) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === k) {
      return mid;
    }

    if (k < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

/**
 * Find k in arr using binary search recursive approach
 * @param {*} arr
 * @param {*} start
 * @param {*} end
 * @param {*} k
 * @returns {number}
 */
function binSearchRecur(arr, start, end, k) {
  // Base condition
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === k) {
    return mid;
  }

  if (k < arr[mid]) {
    return binSearchRecur(arr, start, mid - 1, k);
  } else {
    return binSearchRecur(arr, mid + 1, end, k);
  }
}

/**
 * Find k in arr using binary search
 * @param {Array} arr
 * @param {number} k
 * @returns {number}
 */
function binarySearch(arr, k) {
  const arrLength = arr.length;
  if (!arr || arrLength < 1) {
    return -1;
  }

  // return binSearchIter(arr, 0, arrLength - 1, k);
  return binSearchRecur(arr, 0, arrLength - 1, k);
}

console.log('========== Results: ==========');
console.log(binarySearch([1,2,3,4,5], 4));
console.log(binarySearch([11,22,33,44,55], 445));
