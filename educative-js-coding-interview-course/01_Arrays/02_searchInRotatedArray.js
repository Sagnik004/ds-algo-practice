/*
  **** Statement ****
  Given a sorted integer array "nums", and an integer value "target", the array
  is rotated by some arbitrary number, search the "target" in "nums" and return the index.
  If the "target" is not found in "nums", then return -1.

  **** Example ****
  nums = [6, 7, 1, 2, 3, 4, 5]; target = 3; output = 4
*/



// ######### First approach (naive). TC = O(n), SC = O(1) #########

/**
 * Finds a target number in a nums array using linear search
 * @param {Array} nums
 * @param {number} target
 * @returns {number}
 */
const findTargetInNums_1 = (nums, target) => {
  if (!nums || nums.length === 0) {
    return -1;
  }

  return nums.indexOf(target);
};

console.log(findTargetInNums_1([6, 7, 1, 2, 3, 4, 5], 3));



// ######### 2nd approach (Iterative binary search). TC = O(log n), SC = O(1) #########

/**
 * Finds a target number in a nums array using binary search (Iterative)
 * @param {Array} nums
 * @param {number} target
 * @returns {number}
 */
const findTargetInNums_2 = (nums, target) => {
  if (!nums || nums.length === 0) {
    return -1;
  }

  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

console.log(findTargetInNums_2([6, 7, 1, 2, 3, 4, 5], 3));



// ######### 3rd approach (Recursive binary search). TC = O(log n), SC = O(1) #########

/**
 * Find target in nums recursively
 * @param {Array} nums
 * @param {number} start
 * @param {number} end
 * @param {number} target
 * @returns {number}
 */
const findTargetRecursively = (nums, start, end, target) => {
  if (start > end) {
    return -1;
  };

  const mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) {
    return mid;
  };

  if (nums[start] <= nums[mid]) {
    if (target >= nums[start] && target < nums[mid]) {
      return findTargetRecursively(nums, start, mid - 1, target);
    } else {
      return findTargetRecursively(nums, mid + 1, end, target);
    }
  } else {
    if (target > nums[mid] && target <= nums[end]) {
      return findTargetRecursively(nums, mid + 1, end, target);
    } else {
      return findTargetRecursively(nums, start, mid - 1, target);
    }
  };
};

/**
 * Calls findTargetRecursively function and return back the index
 * @param {Array} nums
 * @param {number} target
 * @returns {number}
 */
const findTargetInNums_3 = (nums, target) => {
  return findTargetRecursively(nums, 0, nums.length - 1, target);
};

console.log(findTargetInNums_3([6, 7, 1, 2, 3, 4, 5], 3));
console.log(findTargetInNums_3([6, 7, 1, 2, 3, 4, 5], 8));
console.log(findTargetInNums_3([4, 5, 6, 1, 2, 3], 3));
console.log(findTargetInNums_3([4, 5, 6, 1, 2, 3], 6));
