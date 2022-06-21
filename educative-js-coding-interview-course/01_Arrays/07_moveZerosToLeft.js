/*
  **** Statement ****
  We are given an integer arrays "nums", we need to move all 0's to the left while maintaining
  the order of other elements in the array.

  Example: nums = [1, 10, 20, 0, 59, 63, 0, 88, 0];
      output: [0, 0, 0, 1, 10, 20, 59, 63, 88];
*/

// ******************************************************************** //
//                Best approach. TC = O(n), SC = O(1)                   //
// ******************************************************************** //

/**
 * To move all zeros to beginning of array
 * @param {Array} nums
 * @returns {Array}
 */
function moveZerosToLeft(nums) {
  if (nums.length < 1) {
    return;
  }

  let numsLength = nums.length;
  let readIndex = numsLength - 1,
    writeIndex = numsLength - 1;

  while (readIndex >= 0) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex--;
    }

    readIndex--;
  }

  while (writeIndex >= 0) {
    nums[writeIndex] = 0;
    writeIndex--;
  }

  console.log(nums);
}

moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]);
moveZerosToLeft([1, 0, 2, 3, 0]);
moveZerosToLeft([0]);
moveZerosToLeft([-1, 0, 0, -2, 9]);
moveZerosToLeft([1, 2, 3, 4, 5]);
moveZerosToLeft([2]);
