/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not3847/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given two arrays A and B of equal size N, the task is to find if given arrays are equal 
  or not. Two arrays are said to be equal if both of them contain same set of elements, 
  arrangements (or permutation) of elements may be different though.
  Note : If there are repetitions, then counts of repeated elements must also be same 
  for two array to be equal.

  Example:
  1) A = [1,2,5,4,0], B = [2,4,5,0,1]; output = 1
  2) A = [1,2,5], B = [2,4,15]; output = 0
  3) A = [1,2,5,4,0,2,1], B = [2,4,5,0,1,1,2]; output = 1

*/

// ******************************************************************** //
//            Simple Solution [TC = O(NlogN), SC = O(1)]                //
// ******************************************************************** //

/**
 * Check if 2 arrays are equal (naive approach)
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
function checkIfEqual_1(arr1, arr2) {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;

  if (arr1Len !== arr2Len) {
    return false;
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1Len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log('========== Results: ==========');
console.log(checkIfEqual_1([1,2,5,4,0], [2,4,5,0,1]));
console.log(checkIfEqual_1([1,2,5], [2,4,15]));
console.log(checkIfEqual_1([1,2,5,4,0,2,1], [2,4,5,0,1,1,2]));


// ******************************************************************** //
//            Better Solution [TC = O(n), SC = O(n)]                    //
// ******************************************************************** //

/**
 * Check if 2 arrays are equal using a HashMap
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
 function checkIfEqual_2(arr1, arr2) {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;

  if (arr1Len !== arr2Len) {
    return false;
  }

  let map = new Map();
  let count = 0;

  for (let i = 0; i < arr1Len; i++) {
    if (map.get(arr1[i]) == null) {
      map.set(arr1[i], 1);
    } else {
      count = map.get(arr1[i]);
      count++;
      map.set(arr1[i], count);
    }
  }

  for (let i = 0; i < arr2Len; i++) {
    if (!map.has(arr2[i])) {
      return false;
    }

    if (map.get(arr2[i]) == 0) {
      return false;
    }

    count = map.get(arr2[i]);
    --count;
    map.set(arr2[i], count);
  }

  return true;
}

console.log('========== Results: ==========');
console.log(checkIfEqual_1([1,2,5,4,0], [2,4,5,0,1]));
console.log(checkIfEqual_1([1,2,5], [2,4,15]));
console.log(checkIfEqual_1([1,2,5,4,0,2,1], [2,4,5,0,1,1,2]));
