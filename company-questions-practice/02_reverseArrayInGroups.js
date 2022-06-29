/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/reverse-array-in-groups0255/1/?page=1&curated[]=1&sortBy=submissions
  
  **** Statement ****
  Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

  Example:
  1) K = 3, arr = [1,2,3,4,5]; output = [3,2,1,5,4]
  2) K = 3, arr = [5,6,8,9]; output = [8,6,5,9]

*/

// ******************************************************************** //
//                     TC = O(n), SC = O(1)                             //
// ******************************************************************** //

/**
 * Reverse sub-array in groups of size k
 * @param {Array} arr
 * @param {number} k
 * @returns {Array}
 */
function reverseInGroups(arr, k) {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, arrLength - 1);
    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr;
}

console.log('========== Results: ==========');
console.log(reverseInGroups([1,2,3,4,5], 3));
console.log(reverseInGroups([5,6,8,9], 3));
