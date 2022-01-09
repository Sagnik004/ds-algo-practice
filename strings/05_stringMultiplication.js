/*
  Problem statement: Given two positive numbers as strings. The numbers may be 
    very large (may not fit in long long int), the task is to find product of 
    these two numbers.
    Note: usage of in-built functions are not allowed.

  Example_1:
    Input: num1 = 4154, num2 = 51454
    Output: 213739916
  
  Example_2:
    Input: num1 = 654154154151454545415415454, num2 = 63516561563156316545145146514654
    Output: 41549622603955309777243716069997997007620439937711509062916
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * TC = O(m * n); SC = O(m + n)
 */

function multiplyStrings(num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;

  if (len1 === 0 || len2 === 0) {
    return '0';
  }

  const result = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    let n1 = +num1[i];
    let carry = 0;
    let i_n1 = i;
    let i_n2 = len2 - 1;

    for (let j = len2 - 1; j >= 0; j--) {
      let n2 = +num2[j];
      let sum = n1 * n2 + result[i_n1 + i_n2 + 1] + carry;
      carry = Math.trunc(sum / 10);
      result[i_n1 + i_n2 + 1] = sum % 10;
      i_n2--;
    }

    if (carry) {
      result[i_n1 + i_n2 + 1] += carry;
    }
  }

  const finalResultStr = result.reduce((prev, curr) => prev + curr, '');

  console.log(finalResultStr);
  return finalResultStr;
}

multiplyStrings('4154', '51454');
multiplyStrings('51454', '4154');
multiplyStrings('14', '227');
multiplyStrings(
  '654154154151454545415415454',
  '63516561563156316545145146514654'
);
