/*
  Problem statement: Final Value of Variable After Performing Operations
  Example:
    Input : operations = ["--X","X++","X++"]
    Output: 1 
      x=0 -> x=0-1=-1 -> x=-1+1=0 -> x=0+1=1)
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
  let variableValue = 0;

  for (let i = 0; i < operations.length; i++) {
    const toAdd = operations[i].indexOf("++") !== -1;
    const toSubtract = operations[i].indexOf("--") !== -1;

    if (toAdd) {
      variableValue += 1;
    } else if (toSubtract) {
      variableValue -= 1;
    }
  }

  return variableValue;
}

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
