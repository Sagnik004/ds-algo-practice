/*
  **** Link ****
  https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1?page=3&curated[]=1&sortBy=submissions

  **** Statement ****
  Given an array of positive integers. Find the length of the longest 
  sub-sequence such that elements in the subsequence are consecutive 
  integers, the consecutive numbers can be in any order.

  Example:
  1) a = [2,6,1,9,4,5,3]; output = 6 (1,2,3,4,5,6)
  2) a = [1,9,3,10,4,20,2]; output = 4 (1,2,3,4)

*/

// ******************************************************************** //
//              Solution_1 [TC = O(nlogn), SC = O(n)]                   //
// ******************************************************************** //

/**
 * Find longest consecutive subsequence - Naive approach
 * @param {Array} arr
 * @returns {number}
 */
function findLongestConseqSubseq_1(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Consider only distinct elements
  const v = [];
  v[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      v.push(arr[i]);
    }
  }

  let res = 0,
    count = 0;
  for (let i = 0; i < v.length; i++) {
    if (i > 0 && v[i] === v[i - 1] + 1) {
      count++;
    } else {
      count = 1;
    }

    res = Math.max(res, count);
  }

  console.log(`Longest subsequence is ${res}`);
  return res;
}

console.log('\n--------- findLongestConseqSubseq_1 ---------');
findLongestConseqSubseq_1([2,6,1,9,4,5,3]);
findLongestConseqSubseq_1([1,9,3,10,4,20,2]);


// ******************************************************************** //
//              Solution_2 [TC = O(n), SC = O(n)]                       //
// ******************************************************************** //

/**
 * Find longest consecutive subsequence - Optimal approach
 * @param {Array} arr
 * @returns {number}
 */
function findLongestConseqSubseq_2(arr) {
  // Create new Set (for using as HashMap, and also include distinct values)
  const hashSet = new Set();
  let result = 0;

  // Fill set with all array elements
  arr.forEach((el) => {
    hashSet.add(el);
  });

  arr.forEach((el) => {
    if (!hashSet.has(el - 1)) {
      let j = el;
      while (hashSet.has(j)) {
        j++;
      }
      result = Math.max(result, j - el);
    }
  });

  console.log(`Longest subsequence is ${result}`);
  return result;
}

console.log('\n--------- findLongestConseqSubseq_2 ---------');
findLongestConseqSubseq_2([2,6,1,9,4,5,3]);
findLongestConseqSubseq_2([1,9,3,10,4,20,2]);
