/*
  **** Statement ****
  Given 3 integer arrays, each sorted in ascending order. Find and return the smallest number
  common in all 3 arrays. If no common is found, then return -1.

  Example: [6,7,10,25,30,63,64], [0,4,5,6,7,8,50], [1,6,10,14]; result = 6
*/

/**
 * Find smallest common number in 3 input arrays. TC = O(n), SC = O(1)
 * @param {Array} arr1
 * @param {Array} arr2
 * @param {Array} arr3
 * @returns {number}
 */
const findLeastCommonNumber = (arr1, arr2, arr3) => {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  const arr3Len = arr3.length;

  let i = 0;
  j = 0;
  k = 0;
  while (i < arr1Len && j < arr2Len && k < arr3Len) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      return arr1[i];
    }

    if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
      i++;
    } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
      j++;
    } else {
      k++;
    }
  }

  return -1;
};

console.log(
  findLeastCommonNumber(
    [6, 7, 10, 25, 30, 63, 64],
    [0, 4, 5, 6, 7, 8, 50],
    [1, 6, 10, 14]
  )
); // Expected: 6

console.log(findLeastCommonNumber([], [], [])); // Expected: -1
