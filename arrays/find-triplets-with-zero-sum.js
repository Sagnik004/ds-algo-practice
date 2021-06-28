/*******************************************************************************
https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1/?category[]=Arrays&category[]=Arrays&problemType=functional&page=1&sortBy=submissions&query=category[]ArraysproblemTypefunctionalpage1sortBysubmissionscategory[]Arrays
Asked in: Amazon, Facebook, Google
Problem statement: Given an array of integers. Check whether it contains a triplet that sums up to zero.
*******************************************************************************/

// Method 1: Brute Force approach: TC = O(n^3) and SC = O(1)
function findTripletsWithZeroSum1(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if ((arr[i] + arr[j] + arr[k]) === 0) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(findTripletsWithZeroSum1([0, -1, 2, -3, 1]));
console.log(findTripletsWithZeroSum1([1, 2, 3]));

console.log('=========== Separator ===========');

// Method 2: Use hashing technique: TC = O(n^2), SC = O(n)
function findTripletsWithZeroSum2(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let uniqSet = new Set();
    for (let j = i + 1; j < n; j++) {
      const sum = -(arr[i] + arr[j]);
      if (uniqSet.has(sum)) {
        return true;
      } else {
        uniqSet.add(arr[j]);
      }
    }
  }

  return false;
}

console.log(findTripletsWithZeroSum2([0, -1, 2, -3, 1]));
console.log(findTripletsWithZeroSum2([1, 2, 3]));
console.log(findTripletsWithZeroSum2([4, -4]));
console.log(findTripletsWithZeroSum2([5]));
