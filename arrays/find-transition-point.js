/*******************************************************************************
https://practice.geeksforgeeks.org/problems/find-transition-point-1587115620/1/?category[]=Arrays&category[]=Arrays&problemType=functional&page=1&sortBy=submissions&query=category[]ArraysproblemTypefunctionalpage1sortBysubmissionscategory[]Arrays
Asked in: Amazon
Problem statement: Given a sorted array containing only 0s and 1s, find the transition point.
*******************************************************************************/

// Method 1: TC = O(n) and SC = O(1)
function transitionPoint(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      return i;
    }
  }
  return -1;
}

console.log(transitionPoint([0, 0, 0, 1, 1]));
console.log(transitionPoint([0, 0, 0, 0]));


// Method 2: Using binary search with recursion. TC = O(log n), SC = O(1)
function transitionPointWithBinarySearch(arr, start, end) {
    if (start > end) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === 0) {
      if (arr[mid + 1] === 1) {
        return (mid + 1);
      }
      return transitionPointWithBinarySearch(arr, mid + 1, end);
    } else if (arr[mid] === 1) {
      if (arr[mid - 1] === 0) {
        return mid;
      }
      return transitionPointWithBinarySearch(arr, start, mid - 1);
    }
}

console.log(transitionPointWithBinarySearch([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], 0, 10));
console.log(transitionPointWithBinarySearch([0, 0, 0, 0], 0, 3));
console.log(transitionPointWithBinarySearch([1, 1, 1, 1], 0, 3));
console.log(transitionPointWithBinarySearch([0, 0, 0, 1, 1], 0, 4));
console.log(transitionPointWithBinarySearch([0, 0, 0, 0, 1, 1, 1, 1], 0, 7));
