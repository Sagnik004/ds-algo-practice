
/*
    https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1/?category[]=Arrays&category[]=Arrays&problemType=functional&page=1&sortBy=submissions&query=category[]ArraysproblemTypefunctionalpage1sortBysubmissionscategory[]Arrays
*/

// Approach - 1 (self), TC = O(n), SC = O(n)
function findDuplicates(arr, n) {
  let elCount = {};

  arr.forEach((el) => {
    if (!elCount[el]) {
      elCount[el] = 1;
    } else {
      elCount[el]++;
    }
  });

  for (el in elCount) {
    if (elCount[el] > 1) {
      return el;
    }
  }

  return -1;
}

console.log(findDuplicates([2, 3, 1, 2, 3], 5));
console.log(findDuplicates([0, 3, 1, 2], 4));
