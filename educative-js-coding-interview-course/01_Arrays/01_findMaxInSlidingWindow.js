/*
  Problem statement: Given an integer array and a window of size "w", find the current maximum 
  value in the window as it slides through the entire array.

  Example: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], window_size = 3;
    output = [3, 4, 5, 6, 7, 8, 9, 10];
*/

// My first solution (naive). TC = O(n * wlogw), SC = O(w)
const findLargestEl = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};

const findMaxSlidingWindow_1 = (nums, windowSize) => {
  const result = [];
  let start = 0,
    end = windowSize - 1,
    numsLength = nums.length - 1;

  if (end > numsLength) {
    end = numsLength;
  }

  while (end <= numsLength) {
    const maxInWindow = findLargestEl(nums.slice(start, end + 1));
    result.push(maxInWindow);
    start++;
    end++;
  }

  return result;
};

console.log(findMaxSlidingWindow_1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(
  findMaxSlidingWindow_1(
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    2
  )
);

// 2nd Solution (naive). TC = O(n * w), SC = O(w)
const findMaxSlidingWindow_2 = (nums, windowSize) => {
  const result = [],
    numsLength = nums.length;

  if (numsLength === 0) {
    return result;
  }

  if (windowSize > numsLength) {
    windowSize = numsLength;
  }

  for (let i = 0; i <= numsLength - windowSize; i++) {
    let max = nums[i];

    for (let j = i + 1; j < i + windowSize; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }

    result.push(max);
  }

  return result;
};

console.log(findMaxSlidingWindow_2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(
  findMaxSlidingWindow_2(
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    2
  )
);

// 3rd Solution (best). TC = O(n), SC = O(w)
const findMaxSlidingWindow_3 = (nums, windowSize) => {
  const result = [];

  if (!nums || nums.length === 0) {
    return result;
  }

  if (windowSize > nums.length) {
    windowSize = nums.length;
  }

  const dequeWindow = [];

  // Max for first window
  for (let i = 0; i < windowSize; i++) {
    while (
      dequeWindow.length > 0 &&
      nums[i] >= nums[dequeWindow[dequeWindow.length - 1]]
    ) {
      dequeWindow.pop();
    }
    dequeWindow.push(i);
  }

  result.push(nums[dequeWindow[0]]);

  // Subsequent windows
  for (let i = windowSize; i < nums.length; i++) {
    while (
      dequeWindow.length > 0 &&
      nums[i] >= nums[dequeWindow[dequeWindow.length - 1]]
    ) {
      dequeWindow.pop();
    }

    if (dequeWindow.length > 0 && dequeWindow[0] <= i - windowSize) {
      dequeWindow.shift();
    }

    dequeWindow.push(i);
    result.push(nums[dequeWindow[0]]);
  }

  return result;
};

console.log(findMaxSlidingWindow_3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(
  findMaxSlidingWindow_3(
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    2
  )
);
