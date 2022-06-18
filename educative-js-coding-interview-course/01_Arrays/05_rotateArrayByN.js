/*
  **** Statement ****
  Given an array of integers "nums", rotate the array by "n" elements where n is an integer.
  For +ve values of n, perform a right rotation. For negative values of n, perform a left rotation.

  Example: nums = [1,10,20,0,59,86,32,11,9,40]; n=2; result = [9,40,1,10,20,0,59,86,32,11]
  nums = [1,10,20,0,59,86,32,11,9,40]; n=-2; result = [20,0,59,86,32,11,9,40,1,10]
*/

// ######### First approach (naive). TC = O(n * m), SC = O(m) #########

/**
 * To rotate an array (naive approach)
 * @param {Array} nums
 * @param {number} n
 * @returns {Array}
 */
function rotateArray_1(nums, n) {
  if (!nums || nums.length === 0) {
    return nums;
  }

  if (n > 0) {
    for (let count = 1; count <= n; count++) {
      const lastEl = nums.pop();
      nums.unshift(lastEl);
    }
  } else if (n < 0) {
    for (let count = -1; count >= n; count--) {
      const firstEl = nums.shift();
      nums.push(firstEl);
    }
  }

  return nums;
}

console.log('----------- rotateArray_1 -----------');
console.log(rotateArray_1([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
console.log(rotateArray_1([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -2));


// ######### 2nd approach (better). TC = O(n), SC = O(n) #########

/**
 * To rotate an array (better approach)
 * @param {Array} nums
 * @param {number} n
 * @returns {Array}
 */
const rotateArray_2 = (nums, n) => {
  const numsLen = nums.length;

  // Normalize rotations
  n = n % numsLen;
  // Convert to positive rotations
  if (n < 0) {
    n = n + numsLen;
  }

  const temp = [];

  // Copy last n elements to temp array
  for (let i = (numsLen - n); i < numsLen; i++) {
    temp.push(nums[i]);
  }

  // Shift original array
  for (let i = numsLen - 1; i >= n; i--) {
    nums[i] = nums[i - n];
  }

  // Copy from temp to original array
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  return nums;
}

console.log('----------- rotateArray_2 -----------');
console.log(rotateArray_2([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
console.log(rotateArray_2([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -2));
console.log(rotateArray_2([15, 20, 25, 30], 3));


// ######### 3rd approach (best). TC = O(n), SC = O(1) #########

/**
 * Reverse array in range of start to end
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 * @returns {undefined}
 */
function reverseArray(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

/**
 * To rotate an array (better approach)
 * @param {Array} nums
 * @param {number} n
 * @returns {Array}
 */
function rotateArray_3(nums, n) {
  const arrLen = nums.length;

  // Normalize rotations
  n = n % arrLen;
  // Calculate +ve rotations needed
  if (n < 0) {
    n = n + arrLen;
  }

  // Rotate the array based on partitions
  reverseArray(nums, 0, arrLen - 1);
  reverseArray(nums, 0, n - 1);
  reverseArray(nums, n, arrLen - 1);

  return nums;
}

console.log('----------- rotateArray_3 -----------');
console.log(rotateArray_3([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2));
console.log(rotateArray_3([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -2));
console.log(rotateArray_3([15, 20, 25, 30], 3));
