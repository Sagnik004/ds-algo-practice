/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given an array Arr (distinct elements) of size N. Rearrange the elements of 
  the array in zig-zag fashion. The converted array should be in form 
  a < b > c < d > e < f. The relative order of elements is same in the output 
  i.e you have to iterate on the original array only.

  Example:
  1) Arr = [4,3,7,8,6,2,1]; output = [3,7,4,8,2,6,1]
  2) Arr = [1,4,3,2]; output = [1,4,2,3]

*/

// ******************************************************************** //
//            Solution [TC = O(n), SC = O(1)]                           //
// ******************************************************************** //

/**
 * Re-arrange array elements in zig-zag order
 * @param {Array} arr
 * @returns {Array}
 */
function zigzag(arr) {
  if (!arr) {
    return;
  }

  const arrLength = arr.length;
  if (arrLength < 2) {
    return arr;
  }

  let lessFlag = true;
  for (let i = 0; i < (arrLength - 1); i++) {
    let j = i + 1;
    if (lessFlag) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    } else {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    lessFlag = !lessFlag;
  }

  return arr;
}

console.log('========== Results: ==========');
console.log(zigzag([4,3,7,8,6,2,1]));
console.log(zigzag([1,4,3,2]));
