/**
 * -----------------------------
 *
 * -----------------------------
 *	N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.
 * (첫 번째 수는 무조건 출력한다)
 *
 * > 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
 *
 * * 입력 - [7, 3, 9, 5, 6, 12]
 * * 출력 - [7, 9, 6, 12]
 */

let arr = [7, 3, 9, 5, 6, 12];

/* ======= reduce ======= */

function solution(arr) {
  let result = [];
  arr.reduce((acc, curr) => {
    if (curr > acc) result.push(curr);
    return curr;
  }, []);
  return result;
}

console.log('solution --->', solution(arr));

/* ======= for ======= */

function solution2(arr) {
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log('solution2 --->', solution2(arr));
