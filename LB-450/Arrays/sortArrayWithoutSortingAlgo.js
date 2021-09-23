// Links:
// - https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
// - https://www.geeksforgeeks.org/sort-array-0s-1s-2s-simple-counting/

/*************************************************************************
  Method 1: 
    Identifying 0's, 1's and 2's and storing them in separate arrays,
    and joining them back
    -> TC = O(N), SC = O(N)
*************************************************************************/

function sort012(arr) {
  const arrOfZeros = [], arrOfOnes = [], arrOfTwos = [];

  arr.forEach(el => {
    if (el === 0) {
      arrOfZeros.push(el);
    } else if (el === 1) {
      arrOfOnes.push(el);
    } else {
      arrOfTwos.push(el);
    }
  });

  return [...arrOfZeros, ...arrOfOnes, ...arrOfTwos];
}

console.log(sort012([0, 2, 1, 2, 0]));
console.log(sort012([0, 1, 0]));

/*************************************************************************
  Method 2: 
    Dutch National Flag Algorithm
    -> TC = O(N), SC = O(1)
*************************************************************************/
function sort012ByDNFA(arr) {
  let low = 0, mid = 0, temp = -1, high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }

  console.log(arr);
}

sort012ByDNFA([0, 2, 1, 2, 0]);
sort012ByDNFA([0, 1, 0]);
sort012ByDNFA([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ]);
