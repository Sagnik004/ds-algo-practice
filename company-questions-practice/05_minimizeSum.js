/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/minimize-the-sum-of-product1525/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given two arrays A and B, of equal size N. The task is to find the minimum
  value of A[0]*B[0] + A[1]*B[1] + .... + A[N-1]*B[N-1], where shuffling of 
  elements of arrays A and B is allowed.

  Example:
  1) A = [3,1,1], B = [6,5,4]; output = 23 (1*6+1*5+3*4 = 6+5+12)
  2) A = [6,1,9,5,4], B = [3,4,8,2,4]; output = 80 (2*9+3*6+4*5+4*4+8*1 = 18+18+20+16+8)

*/

// ******************************************************************** //
//                Solution_1 [TC = O(NlogN), SC = O(1)]                 //
// ******************************************************************** //

/**
 * Minimize sum, naive approach
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {number}
 */
function minimizeSum_1(arr1, arr2) {
  if (!arr1 || !arr2) {
    return;
  }

  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  if (arr1Length < 1 || arr2Length < 1) {
    return;
  }

  arr1.sort((a, b) => a - b); // sort arr1 in ascending order
  arr2.sort((a, b) => b - a); // sort arr2 in descending order

  let sum = 0;
  for (let i = 0; i < arr1Length; i++) {
    sum += arr1[i] * arr2[i];
  }

  return sum;
}

console.log('========== Results: ==========');
console.log(minimizeSum_1([3,1,1], [6,5,4]));
console.log(minimizeSum_1([6,1,9,5,4], [3,4,8,2,4]));
