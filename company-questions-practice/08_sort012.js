/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given an array of size N containing only 0s, 1s, and 2s; 
  sort the array in ascending order. Similar problem: “Dutch National Flag problem”

  Example:
  1) A = [0,2,1,2,0]; output = [0,0,1,2,2]
  2) A = [0,1,0]; output = [0,0,1]

*/

// ******************************************************************** //
//              Solution_1 [TC = O(nlogn), SC = O(1)]                   //
// ******************************************************************** //

/**
 * Sort-012 (naive approach)
 * @param {Array} arr
 * @returns {Array}
 */
function sort012_1(arr) {
  if (!arr || arr.length < 1) {
    return;
  }

  arr.sort((a, b) => a - b);
  return arr;
}

console.log('Results:');
console.log(sort012_1([0,2,1,2,0]));
console.log(sort012_1([0,1,0]));


// ******************************************************************** //
//                Solution_2 [TC = O(n), SC = O(1)]                     //
// ******************************************************************** //

/**
 * Sort-012 (better approach)
 * @param {Array} arr
 * @returns {Array}
 */
function sort012_2(arr) {
  if (!arr || arr.length < 1) {
    return;
  }

  let cnt0 = 0, cnt1 = 0, cnt2 = 0;
  arr.forEach((el) => {
    switch (el) {
      case 0:
        cnt0++;
        break;
      case 1:
        cnt1++;
        break;
      case 2:
        cnt2++;
        break;
    }
  });

  let index = 0;
  while(cnt0 > 0) {
    arr[index] = 0;
    index++;
    cnt0--;
  }
  while(cnt1 > 0) {
    arr[index] = 1;
    index++;
    cnt1--;
  }
  while(cnt2 > 0) {
    arr[index] = 2;
    index++;
    cnt2--;
  }

  return arr;
}

console.log('Results:');
console.log(sort012_2([0,2,1,2,0]));
console.log(sort012_2([0,1,0]));
