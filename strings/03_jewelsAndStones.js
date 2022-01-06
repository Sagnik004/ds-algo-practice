/*
  Problem statement: You're given strings jewels representing the types of stones 
    that are jewels, and stones representing the stones you have. Each character 
    in stones is a type of stone you have. You want to know how many of the stones 
    you have are also jewels. Letters are case sensitive, so "a" is considered 
    a different type of stone from "A".

  Example:
    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3

*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * TC = O(n + m); SC = O(n)
 */

function numJewelsInStones(jewels, stones) {
  const jewelsMap = {};
  for (let jewel of jewels) {
    jewelsMap[jewel] = true;
  }

  let jewelsCount = 0;
  for (let stone of stones) {
    if (jewelsMap[stone]) {
      ++jewelsCount;
    }
  }

  return jewelsCount;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
