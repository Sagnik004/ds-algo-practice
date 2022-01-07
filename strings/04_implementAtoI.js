/*
  Problem statement: Implement the function "atoi". The function takes a string(str) 
    as argument and converts it to an integer and returns it.
    Note: usage of in-built functions are not allowed.

  Example_1:
    Input: str = "123"
    Output: 123
  
  Example_2:
    Input: str = "21a"
    Output: -1
*/

const numMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

/**
 * @param {string} str
 * @return {number}
 * TC = O(n); SC = O(1)
 */
function atoi(str) {
  const strLen = str.length - 1;
  let formattedNum = 0;

  for (let i = strLen; i >= 0; i--) {
    const num = numMap[str[i]];
    if (!num) {
      return -1;
    }
    formattedNum += num * 10 ** (strLen - i);
  }

  return formattedNum;
}

console.log(atoi('123'));
console.log(atoi('21a'));
