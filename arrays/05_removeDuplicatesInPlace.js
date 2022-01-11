/*
  Problem statement: Remove duplicate elements from sorted Array.
    Given a sorted array A[] of size N, delete all the duplicates elements from A[].
    Note: Don't use set or HashMap to solve the problem.

  Example_1:
    Input: arr = [2, 2, 2, 2, 2]
    Output: arr = [2]
  
  Example_2:
    Input: arr = [1, 2, 2]
    Output: arr = [1, 2]

  Example_3:
    Input: arr = [1, 2, 2, 3, 3, 3, 3, 4]
    Output: arr = [1, 2, 3, 4]

  Example_4:
    Input: arr = [1, 2, 3, 4]
    Output: arr = [1, 2, 3, 4]
*/

/**
 * @param {Array} arr
 * @return {Array}
 * TC = O(); SC = O()
 */
function remove_duplicate_1(arr) {
  const arrLen = arr.length;

  if (arrLen <= 1) {
    return arr;
  }

  let j = 0;
  for (let i = 1; i < arrLen; i++) {
    if (arr[j] !== arr[i]) {
      j++;
      arr[j] = arr[i];
    }
  }

  arr.splice(j + 1);
  return arr;
}

console.log(remove_duplicate_1([2, 2, 2, 2, 2]));
console.log(remove_duplicate_1([1, 2, 2]));
console.log(remove_duplicate_1([1, 2, 2, 3, 3, 3, 3, 4]));
console.log(remove_duplicate_1([1, 2, 3, 4]));
