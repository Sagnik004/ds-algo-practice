// Link: https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

/*************************** 
  Iterative approach -> TC = O(n), SC = O(1)
***************************/
function reverseArrIter(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  console.log(arr);
  return arr;
}

reverseArrIter([1, 2, 3]);
reverseArrIter([4, 5, 1, 2]);


/***************************
  Recursive Approach -> TC = O(n), SC = O(1)
***************************/

function reverseArrRecur(arr, start, end) {
  if (start > end) {
    return arr;
  }

  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  return reverseArrRecur(arr, start + 1, end - 1);
}

console.log(reverseArrRecur([1, 2, 3], 0, 2));
console.log(reverseArrRecur([4, 5, 1, 2], 0, 3));
