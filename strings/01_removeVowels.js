/*
  Problem statement: Given a string, remove the vowels
  Example:
    Input : welcome to geeksforgeeks
    Output: wlcm t gksfrgks
*/

const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

// Approach 1: Iterative. TC = O(n), SC = O(n)
function removeVowels_01(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!vowels[str[i].toLowerCase()]) {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(removeVowels_01("welcome to geeksforgeeks"));
console.log(removeVowels_01("what is your name ?"));
