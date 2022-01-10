/*
  Problem statement: A celebrity is a person who is known to all but doesn't know
    anyone at a party. If we go to a party of N people, find if there is a celebrity
    in the party or not.

  Example_1:
    Input: N = 3, M = [[0, 1, 0], [0, 0, 0], [0, 1, 0]]
    Output: 1 (0th and 2nd both know 1, but 1 doesn't know anyone)
*/

/**
 * Method_1
 * @param {array} M
 * @param {integer} N
 * @return {integer}
 * TC = O(n * n); SC = O(n)
 */
function celebrity_1(M, N) {
  const inDegree = new Array(N).fill(0);
  const outDegree = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (M[i][j] === 1) {
        inDegree[j]++;
        outDegree[i]--;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (inDegree[i] === N - 1 && outDegree[i] === 0) {
      return i;
    }
  }

  return -1;
}

console.log(
  celebrity_1(
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
    ],
    4
  )
);

console.log(
  celebrity_1(
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ],
    4
  )
);

/**
 * Method_2
 * @param {array} M
 * @param {integer} N
 * @return {integer}
 * TC = O(n); SC = O(1)
 */
function celebrity_2(M, N) {
  let c = 0;

  for (let i = 0; i < N; i++) {
    if (M[c][i] === 1) {
      c = i;
    }
  }

  for (let i = 0; i < N; i++) {
    if (i !== c && (M[c][i] === 1 || M[i][c] === 0)) {
      return -1;
    }
  }

  return c;
}

console.log(
  celebrity_2(
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
    ],
    4
  )
);

console.log(
  celebrity_2(
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ],
    4
  )
);
