/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given an unsorted array A of size N that contains only non-negative integers, 
  find a continuous sub-array which adds to a given number S. In case of multiple subarrays,
  return the subarray which comes first on moving from left to right.

  Example:
  1) A = [1,2,3,7,5], S = 12; output = 1, 3 (index 1 to 3)
  2) A = [1,2,3,4,5,6,7,8,9,10], S = 15; output = 0, 4 (index 0 to 4)

*/

// ******************************************************************** //
//                Solution_1 [TC = O(n^2), SC = O(1)]                   //
// ******************************************************************** //

/**
 * Continous subarray adding to given sum (naive approach)
 * @param {Array} arr
 * @param {number} sum
 * @returns {undefined}
 */
function subArraySum_1(arr, sum) {
  if (!arr) {
    return;
  }

  const arrLength = arr.length;
  if (arrLength < 2) {
    return;
  }

  let curSum = 0;
  for (let i = 0; i < arrLength; i++) {
    curSum = arr[i];
    for (let j = i + 1; j <= arrLength; j++) {
      if (curSum === sum) {
        console.log(`Sum ${sum} found between index ${i} and ${j - 1}`);
        return;
      }
      if (curSum > sum || j === arrLength) {
        break;
      }
      curSum += arr[j];
    }
  }

  console.log(`No subarray found to sum to ${sum}!`);
}

console.log('========== Results: ==========');
subArraySum_1([1, 2, 3, 7, 5], 12);
subArraySum_1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
subArraySum_1([1, 4, 20, 3, 10, 5], 33);
subArraySum_1([1, 4, 0, 0, 3, 10, 5], 7);
subArraySum_1([1, 4], 0);


// ******************************************************************** //
//                Solution_2 [TC = O(n), SC = O(1)]                     //
// ******************************************************************** //

/**
 * Continous subarray adding to given sum (naive approach)
 * @param {Array} arr
 * @param {number} sum
 * @returns {undefined}
 */
function subArraySum_2(arr, sum) {
  if (!arr) {
    return;
  }

  const arrLength = arr.length;
  if (arrLength < 2) {
    return;
  }

  let curSum = arr[0],
    start = 0;
  for (let i = 1; i <= arrLength; i++) {
    while (curSum > sum && start < i - 1) {
      curSum -= arr[start];
      start++;
    }
    if (curSum === sum) {
      console.log(`Sum ${sum} found between index ${start} and ${i - 1}`);
      return;
    }
    if (i < arrLength) {
      curSum += arr[i];
    }
  }

  console.log(`No subarray found to sum to ${sum}!`);
}

console.log('========== Results: ==========');
subArraySum_2([1, 2, 3, 7, 5], 12);
subArraySum_2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
subArraySum_2([1, 4, 20, 3, 10, 5], 33);
subArraySum_2([1, 4, 0, 0, 3, 10, 5], 7);
subArraySum_2([1, 4], 0);
