/*
  Problem statement: Find first and last positions of an element in a sorted array.
    Given a sorted array with possibly duplicate elements, the task is to find indexes of 
    first and last occurrences of an element x in the given array.

  Example_1:
    Input: arr = [1, 3, 5, 5, 5, 5, 67, 123, 125], x = 5
    Output: First Occurrence = 2, Last Occurrence = 5
  
  Example_2:
    Input: arr = [1, 3, 5, 5, 5, 5, 7, 123, 125], x = 7
    Output: First Occurrence = 6, Last Occurrence = 6
*/

/**
 * @param {Array} arr
 * @param {Number} elToFind
 * @return {void}
 * TC = O(n); SC = O(1)
 */
function findFirstAndLast_1(arr, elToFind) {
  const firstOcc = arr.indexOf(elToFind);
  const lastOcc = arr.lastIndexOf(elToFind);

  if (firstOcc !== -1 || lastOcc !== -1) {
    console.log(`First Occurance of ${elToFind}: ${firstOcc}`);
    console.log(`Last Occurance of ${elToFind}: ${lastOcc}`);
  } else {
    console.log(`${elToFind} not found!`);
  }
}

console.log("-------------------------------------");
findFirstAndLast_1([1, 3, 5, 5, 5, 5, 67, 123, 125], 5);
findFirstAndLast_1([1, 3, 5, 5, 5, 5, 7, 123, 125], 7);

/**
 * @param {Array} arr
 * @param {Number} elToFind
 * @return {void}
 * TC = O(n); SC = O(1)
 */
function findFirstAndLast_2(arr, elToFind) {
  let firstOcc = -1,
    lastOcc = -1;

  arr.forEach((el, i) => {
    if (el === elToFind) {
      if (firstOcc === -1) {
        firstOcc = i;
      }
      lastOcc = i;
    }
  });

  if (firstOcc !== -1 || lastOcc !== -1) {
    console.log(`First Occurance of ${elToFind}: ${firstOcc}`);
    console.log(`Last Occurance of ${elToFind}: ${lastOcc}`);
  } else {
    console.log(`${elToFind} not found!`);
  }
}

console.log("-------------------------------------");
findFirstAndLast_2([1, 3, 5, 5, 5, 5, 67, 123, 125], 5);
findFirstAndLast_2([1, 3, 5, 5, 5, 5, 7, 123, 125], 7);

/**
 * @param {Array} arr
 * @param {Number} elToFind
 * @return {void}
 * TC = O(logN); SC = O(1)
 */
function findFirstAndLast_3(arr, elToFind) {
  let low = 0,
    high = arr.length - 1,
    firstOcc = -1,
    lastOcc = -1;

  // Find first occurance
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > elToFind) {
      high = mid - 1;
    } else if (arr[mid] < elToFind) {
      low = mid + 1;
    } else {
      firstOcc = mid;
      high = mid - 1;
    }
  }

  (low = 0), (high = arr.length - 1);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > elToFind) {
      high = mid - 1;
    } else if (arr[mid] < elToFind) {
      low = mid + 1;
    } else {
      lastOcc = mid;
      low = mid + 1;
    }
  }

  if (firstOcc !== -1 || lastOcc !== -1) {
    console.table(`First Occurance of ${elToFind}: ${firstOcc}`);
    console.table(`Last Occurance of ${elToFind}: ${lastOcc}`);
  } else {
    console.table(`${elToFind} not found!`);
  }
}

console.log("-------------------------------------");
findFirstAndLast_3([1, 3, 5, 5, 5, 5, 67, 123, 125], 5);
findFirstAndLast_3([1, 3, 5, 5, 5, 5, 7, 123, 125], 7);
