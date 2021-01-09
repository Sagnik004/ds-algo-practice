/* ##################################  ARRAYS ################################# */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// Array Rotation ( link: https://www.geeksforgeeks.org/array-rotation/ )      //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

/*
const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 2; */

// function rotateMyArray(arr, d, n) {
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
}

console.log(arr);
}

rotateMyArray(arr, d, arr.length); */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
//                    Reversal Algorithm for Array Rotation                    //       
//             ( link: https://www.geeksforgeeks.org/array-rotation/ )         //
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
