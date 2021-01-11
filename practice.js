/* ##################################  ARRAYS ################################# */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// Array Rotation ( link: https://www.geeksforgeeks.org/array-rotation/ )      //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


const arr = [1, 2, 3, 4, 5, 6, 7];
const rotateBy = 2;

function rotateMyArray(arr, d, n) {
  /* ================== My First Approach ========================= TC: O(n), SC: O(d) */
  // const tempArr = [];

  // for (let i = 0; i < d; i++) {
  //   tempArr[i] = arr[i];
  // }

  // let i = 0;
  // while ((i + d) < n) {
  //   arr[i] = arr[i + d];
  //   i++;
  // }

  // let j = 0;
  // let pos = n - d;
  // while (pos !== n) {
  //   arr[pos] = tempArr[j];
  //   pos++;
  //   j++;
  // }

  /* ================= 2nd Approach (left shift | one by one) ========== TC: O(n*d) SC: O(1) */
  // function leftRotateByOne() {
  //   let temp = arr[0], i = 0;
  //   for (; i < n - 1; i++) {
  //     arr[i] = arr[i + 1];
  //   }
  //   arr[i] = temp;
  // }

  // for (let i = 0; i < d; i++) {
  //   leftRotateByOne();
  // }

  /* ================= 3rd Approach (Juggling Algorithm) ============ TC: O(n) SC: O(1) */
  /* function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
  d = d % n; // to handle if d>=n
  const g_c_d = gcd(d, n);
  let temp, j, k;
  for (let i = 0; i < g_c_d; i++) {
    temp = arr[i];
    j = i;
    while (true) {
      k = j + d;
      if (k >= n) {
        k = k - n;
      }
      if (k === i) break;
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  } */

  /* ================= 4th Approach (Reversal Algorithm) ============ TC: O(n) SC: O(1) */
  function reverseArray(start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // First checks
  // if (d === 0) return;
  // d = d % n; // in case rotating length is greater than array length

  // reverseArray(0, d - 1);
  // reverseArray(d, n - 1);
  // reverseArray(0, n - 1);

  /* ================= 4.1) Rotate From Right (Reversal Algorithm) ============ TC: O(n) SC: O(1) */
  /* ============ https://www.geeksforgeeks.org/reversal-algorithm-right-rotation-array/?ref=rp ============ */
  // reverseArray(0, n - d - 1);
  // reverseArray(n - d, n - 1);
  // reverseArray(0, n - 1);
  // Another approach can be - reverseArray(0, n-1) -> reverseArray(0, d-1), reverseArray(d, n-1)


  /* ================= 5th Approach (Block swap Algorithm) ============ TC: O(n) SC: O(1) */
  /* ============ https://www.geeksforgeeks.org/block-swap-algorithm-for-array-rotation/ ============ */
  /* function swap(fi, si, di) {
    let temp;
    for (let i = 0; i < di; i++) {
      temp = arr[fi + i];
      arr[fi + i] = arr[si + i];
      arr[si + i] = temp;
    }
  }
  
  function leftRotateRec(i, d, n) {
    if (d === 0 || d === n) return; // Basic validation
  
    if ((n - d) === d) { // Exactly in middle
      swap(i, n - d + i, d);
    } else if (d < (n - d)) { // A is shorter
      swap(i, n - d + i, d);
      leftRotateRec(i, d, n - d);
    } else { // B is shorter
      swap(i, d, n - d);
      leftRotateRec(n - d + i, (2 * d) - n, d);
    }
  }
  
  leftRotateRec(0, d, n); */

  /* ================= Cyclically rotate an arr by one ============ TC: O(n) SC: O(1) */
  /* ============ https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/ ============ */
  // function approachOne() {
  //   const lastEl = arr[n - 1];
  //   for (let i = (n - 1); i > 0; i--) {
  //     arr[i] = arr[i - 1];
  //   }
  //   arr[0] = lastEl;
  // }

  // approachOne();

  // Using reversal algorithm
  // reverseArray(0, n - 1); // --> [7, 6, 5, 4, 3, 2, 1]
  // reverseArray(1, n - 1); // --> [7, 1, 2, 3, 4, 5, 6]

  console.log(arr);
}

rotateMyArray(arr, rotateBy, arr.length);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
//                    Reversal Algorithm for Array Rotation                    //       
//             ( link: https://www.geeksforgeeks.org/array-rotation/ )         //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
