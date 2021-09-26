// Link: https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0

/*************************************************************************
  Method 1: 
    Iterate and print one array as is. For 2nd one, iterate and check if
    the element is found in array_1, if not found then print it.
    -> TC = O(m + mn), SC = O(m + n)
*************************************************************************/
function doUnion_1(arr1, arr2) {
  let finalArr = [];

  arr1.forEach(el => finalArr.push(el));

  arr2.forEach(el => {
    if (finalArr.indexOf(el) === -1) {
      finalArr.push(el);
    }
  });

  return finalArr.length;
}

console.log(doUnion_1([1, 2, 3, 4, 5], [1, 2, 3]));
console.log(doUnion_1([85, 25, 1, 32, 54, 6], [85, 2]));


/*************************************************************************
  Method 2: 
    Iterate array #1 and store elements as is. But also store all elements in a hash map.
    For the 2nd one, iterate and check if the element is in the hash map,
    if not then add into final array and also in hashmap (if).
    -> TC = O(m + n), SC = O(m + n)
*************************************************************************/
function doUnion_2(arr1, arr2) {
  const finalArr = [],
    elemHashMap = {};
  
  arr1.forEach(el => {
    if (!elemHashMap[el]) {
      elemHashMap[el] = true;
      finalArr.push(el);
    }
  });

  arr2.forEach(el => {
    if (!elemHashMap[el]) {
      elemHashMap[el] = true;
      finalArr.push(el);
    }
  });

  return finalArr.length;
}

console.log(doUnion_2([1, 2, 3, 4, 5], [1, 2, 3]));
console.log(doUnion_2([85, 25, 1, 32, 54, 6], [85, 2]));
