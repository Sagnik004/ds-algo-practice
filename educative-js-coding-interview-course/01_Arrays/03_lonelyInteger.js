/*
  **** Statement ****
  Given an array of integers, find and print the unique element.
  Example: [1, 1, 5, 4, 3, 3, 5, 6, 7, 2, 7, 6, 2]; result = 4
*/

// ######### First approach (naive). TC = O(n), SC = O(n) #########

/**
 * Finds lonely integer in naive approach and returns it
 * @param {Array} nums 
 * @returns {number}
 */
function findLonelyInteger_1(nums) {
  if (!nums || nums.length === 0) {
    return -1;
  };

  if (nums.length === 1) {
    return nums[0];
  };

  const numCountMap = {};
  nums.forEach(num => {
    if (numCountMap[num]) {
      numCountMap[num] = numCountMap[num] + 1;
    } else {
      numCountMap[num] = 1;
    }
  });

  const keysArr = Object.keys(numCountMap);
  const keysValues = Object.values(numCountMap);

  return +keysArr[keysValues.indexOf(1)];
};

console.log(findLonelyInteger_1([1, 1, 5, 4, 3, 3, 5, 6, 7, 2, 7, 6, 2]));


// ######### 2nd approach (smart). TC = O(n), SC = O(1) #########

/**
 * Finds lonely integer using bitwise XOR and returns it
 * @param {Array} nums 
 * @returns {number}
 */
function findLonelyInteger_2(nums) {
  if (!nums || nums.length === 0) {
    return -1;
  };

  if (nums.length === 1) {
    return nums[0];
  };

  return nums.reduce((a, b) => a ^ b);
};

console.log(findLonelyInteger_2([1, 1, 5, 4, 3, 3, 5, 6, 7, 2, 7, 6, 2]));
