// Link: https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

/*************************** 
  Simple Linear Approach -> TC = O(n), SC = O(1)
***************************/
function findMinMaxLinearly(arr) {
  const arrLength = arr.length;
  let min, max;

  if (arrLength < 1) {
    return -1;
  }

  if (arrLength === 1) {
    return {
      min: arr[0],
      max: arr[0]
    };
  }

  if (arr[1] > arr[0]) {
    min = arr[0];
    max = arr[1];
  } else if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  } else {
    min = arr[0];
    max = arr[0];
  }

  for (let i = 2; i < arrLength; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log('Min: ', min);
  console.log('Max: ', max);

  return {
    min,
    max
  };
}

findMinMaxLinearly([1000, 11, 445, 1, 330, 3000]);
