function merge(arr, low, mid, high) {
  console.log(arr);
  const len1 = mid - low + 1;
  const len2 = high - mid;

  // Create temp arrays
  const arr1 = arr.slice(0, mid + 1);
  const arr2 = arr.slice(mid + 1, high);

  let i = 0,
    j = 0,
    k = low;
  while (i < len1 && j < len2) {
    if (arr1[i] <= arr2[j]) {
      arr[k] = arr1[i];
      i++;
    } else {
      arr[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < len1) {
    arr[k] = arr1[i];
    i++;
    k++;
  }

  while (j < len2) {
    arr[k] = arr2[j];
    j++;
    k++;
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }

  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

var arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
