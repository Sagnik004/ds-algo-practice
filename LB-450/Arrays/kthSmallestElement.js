// Link: https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1

/*************************** 
  By Sorting and finding -> TC = O(N logN), SC = O(1)
***************************/
function sortAndFind(arr, k) {
  arr.sort((a, b) => a - b);

  console.log(arr[k - 1]);
  return arr[k - 1];
}

sortAndFind([7, 10, 4, 3, 20, 15], 3);
sortAndFind([7, 10, 4, 20, 15], 4);

// Room for improvement is there, to be checked in future
