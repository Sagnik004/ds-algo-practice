// Link: https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1

/*************************************************************************
  Method 1: 
    Save the last element, and iterate the array from 2nd last element till first.
    At each iteration, copy a[i] to a[i+1], and then finally copy last element to a[1]
    -> TC = O(n), SC = O(1)
*************************************************************************/
function rotate_1(arr) {
  const arrLength = arr.length;

  if (arrLength <= 1) {
    return arr;
  }

  const lastEl = arr[arrLength - 1];
  for (let i = (arrLength - 2); i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = lastEl;

  console.log(arr);
  return arr;
}

rotate_1([9, 8, 7, 6, 4, 2, 1, 3]);
rotate_1([1, 2, 3, 4, 5]);


/*************************************************************************
  Method 2: 
    Use the swap method.
    -> TC = O(n), SC = O(1)
*************************************************************************/
function rotate_2(arr) {
  const arrLength = arr.length;

  if (arrLength <= 1) {
    return arr;
  }

  let start = 0, end = arrLength - 1;
  while (start !== end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
  }

  console.log(arr);
  return arr;
}

rotate_2([9, 8, 7, 6, 4, 2, 1, 3]);
rotate_2([1, 2, 3, 4, 5]);
