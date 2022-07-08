/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given an array A of positive integers. Your task is to find the 
  leaders in the array. An element of array is leader if it is greater 
  than or equal to all the elements to its right side. The rightmost element 
  is always a leader.

  Example:
  1) A = [16,17,4,3,5,2]; output = [17,5,2]
  2) A = [1,2,3,4,0]; output = [4,0]

*/

// ******************************************************************** //
//              Solution_1 [TC = O(n^2), SC = O(n)]                     //
// ******************************************************************** //

/**
 * Find leaders in array (naive approach)
 * @param {Array} arr
 * @returns {Array}
 */
function leader_1(arr) {
  const results = [];

  if (!arr || arr.length < 1) {
    return results;
  }

  for (let i = 0; i < arr.length; i++) {
    let isILeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        isILeader = false;
        break;
      }
    }
    if (isILeader) {
      results.push(arr[i]);
    }
  }

  console.log(results);
  return results;
}

console.log('========= Results =========');
leader_1([16,17,4,3,5,2]);
leader_1([1,2,3,4,0]);


// ******************************************************************** //
//                  Solution_2 [TC = O(n), SC = O(n)]                   //
// ******************************************************************** //

/**
 * Find leaders in array (better approach)
 * @param {Array} arr
 * @returns {Array}
 */
function leader_2(arr) {
  const results = [];

  if (!arr || arr.length < 1) {
    return results;
  }

  let max = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      max = arr[i];
      results.push(max);
    }
  }

  // Results order of elements will be in reverse, if original order is
  // desired, then we can run another loop to swap them a[0] <-> a[n-1]...
  console.log(results);
  return results;
}

console.log('========= Results =========');
leader_2([16,17,4,3,5,2]);
leader_2([1,2,3,4,0]);
