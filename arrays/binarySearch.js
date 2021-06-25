/*******************************************************************************
https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1/?category[]=Arrays&category[]=Arrays&problemType=functional&page=1&sortBy=submissions&query=category[]ArraysproblemTypefunctionalpage1sortBysubmissionscategory[]Arrays
Asked in: Accenture, CTS, Infosys, LinkedIn, Oracle, Qualcomm, TCS, Wipro
Problem statement: Given a sorted array of size N and an integer K, find the position at which K is present in the array using binary search.
*******************************************************************************/

function binarySearch(arr, start, end, k) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === k) {
    return mid;
  }

  if (arr[mid] > k) {
    return binarySearch(arr, start, mid - 1, k);
  } else {
    return binarySearch(arr, mid + 1, end, k);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 0, 4, 4));
console.log(binarySearch([11, 22, 33, 44, 55], 0, 4, 445));
