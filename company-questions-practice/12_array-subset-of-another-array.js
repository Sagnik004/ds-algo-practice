/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/array-subset-of-another-array2317/1/?page=1&curated[]=1&sortBy=submissions

  **** Statement ****
  Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. 
  Task is to check whether a2[] is a subset of a1[] or not. 
  Both the arrays can be sorted or unsorted. 

  Example:
  1) a1 = [11,1,13,21,3,7], a2 = [11,3,7,1]; output = 'Yes'
  2) a1 = [10,5,2,23,19], a2 = [19,5,3]; output = 'No'

*/

// ******************************************************************** //
//              Solution_1 [TC = O(n*m), SC = O(1)]                     //
// ******************************************************************** //

/**
 * Array subset of another array (naive approach - 1)
 * @param {Array} a1
 * @param {Array} a2
 * @returns {string}
 */
function isSubset_1(a1, a2) {
  if (!a1 || a1.length < 1 || !a2 || a2.length < 1) {
    return 'No';
  }

  for (let i = 0; i < a2.length; i++) {
    let iFound = false;

    for (let j = 0; j < a1.length; j++) {
      if (a2[i] === a1[j]) {
        iFound = true;
        break;
      }
    }

    if (!iFound) {
      return 'No';
    }
  }

  return 'Yes';
}

console.log('========= Results =========');
console.log(isSubset_1([11,1,13,21,3,7], [11,3,7,1]));
console.log(isSubset_1([10,5,2,23,19], [19,5,3]));
console.log(isSubset_1([1,2,3,4,5,6], [1,2,4]));


// ******************************************************************** //
//                  Solution_2 [TC = O(n+m), SC = O(n)]                 //
// ******************************************************************** //

/**
 * Array subset of another array (naive approach - 2)
 * @param {Array} a1
 * @param {Array} a2
 * @returns {string}
 */
function isSubset_2(a1, a2) {
  if (!a1 || a1.length < 1 || !a2 || a2.length < 1) {
    return 'No';
  }
  
  const map = new Map();

  a1.forEach((el) => {
    if (!map.has(el)) {
      map.set(el, true);
    }
  });

  for (let i = 0; i < a2.length; i++) {
    if (!map.has(a2[i])) {
      return 'No';
    }
  }

  return 'Yes';
}

console.log('========= Results =========');
console.log(isSubset_2([11,1,13,21,3,7], [11,3,7,1]));
console.log(isSubset_2([10,5,2,23,19], [19,5,3]));
console.log(isSubset_2([1,2,3,4,5,6], [1,2,4]));
