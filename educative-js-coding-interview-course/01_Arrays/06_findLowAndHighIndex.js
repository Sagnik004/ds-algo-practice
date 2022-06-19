/*
  **** Statement ****
  We are given a sorted array of integers "nums", and an integer value "target". Find and return the
  lowest and the highest index of the given "target" in the "nums" array. If not found then return -1

  Example: nums = [1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,6]; target = 5;
           output: low_index = 14, high_index = 16
*/

// ******************************************************************** //
//         First approach (naive). TC = O(n), SC = O(1)                 //
// ******************************************************************** //

/**
 * To find the low index using linear search
 * @param {Array} nums
 * @param {number} target
 * @returns {number}
 */
function findLowIndex_1(nums, target) {
  return nums.indexOf(target);
}

/**
 * To find the high index using linear search
 * @param {Array} nums
 * @param {number} target
 * @returns {number}
 */
function findHighIndex_1(nums, target) {
  return nums.lastIndexOf(target);
}

console.log('----------- Soln_1 -----------');
console.log(findLowIndex_1([1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,6], 5));
console.log(findHighIndex_1([1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,6], 5));


// ******************************************************************** //
//         Second approach (best). TC = O(log n), SC = O(1)             //
// ******************************************************************** //

/**
 * To find the low index using modified binary search
 * @param {Array} nums
 * @param {number} target
 * @returns {number}
 */
function findLowIndex_2(nums, target) {
  const numsLength = nums.length;
  let low = 0, high = numsLength - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (low < numsLength && nums[low] === target) {
    return low;
  }

  return -1;
}

/**
 * To find the high index using modified binary search
 * @param {Array} nums
 * @param {number} target
 * @returns {number}
 */
function findHighIndex_2(nums, target) {
  const numsLength = nums.length;
  let low = 0, high = numsLength - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (high === -1) {
    return high;
  }

  if ((high < numsLength) && (nums[high] === target)) {
    return high;
  }

  return -1;
}

console.log('----------- Soln_2 -----------');
console.log(findLowIndex_2([1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,6], 5));
console.log(findHighIndex_2([1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,6], 5));
