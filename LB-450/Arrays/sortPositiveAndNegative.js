// Links:
// - https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

/*************************************************************************
  Method 1: 
    Identifying the positive and negative numbers and storing them in separate arrays,
    and joining them back finally
    -> TC = O(N), SC = O(N)
*************************************************************************/

function reArrange1(arr) {
  const posArr = [], negArr = [];

  arr.forEach(el => {
    if (el < 0) {
      negArr.push(el);
    } else {
      posArr.push(el);
    }
  });

  return [...negArr, ...posArr];
}

console.log(reArrange1([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

/*************************************************************************
  Method 2: 
    Use "partitioning" logic of Quick Sort.
    -> TC = O(N), SC = O(1)
    -> it also sorts the array
*************************************************************************/
function reArrange2(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }

  return arr;
}

console.log(reArrange2([-12, 11, -13, -5, 6, -7, 5, -3, -6]));


/*************************************************************************
  Method 3:
    Use "two pointer technique"
    -> TC = O(N), SC = O(1)
    -> the order of elements is not maintained here
*************************************************************************/
function reArrange3(arr) {
  let low = 0, high = (arr.length - 1);

  while (low < high) {
    if ((arr[low] < 0) && (arr[high] < 0)) {
      low += 1;
    } else if ((arr[low] > 0) && (arr[high] < 0)) {
      const temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
      low += 1;
      high -= 1;
    } else if ((arr[low] > 0) && (arr[high] > 0)) {
      high -= 1;
    } else { // when arr[low] < 0 and arr[high] > 0
      low += 1;
      high -= 1;
    }

    console.log(low, high, arr);
  }

  return arr;
}

console.log(reArrange3([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

