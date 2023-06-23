/**
 * -----------------------------
 * 5. 최솟값 구하기
 * -----------------------------
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요
 *
 * > 첫 번째 줄에 가장 작은 값을 출력한다.
 *
 * * 입력 - 5 3 7 11 2 15 17
 * * 출력 - 2
 */

let arr = [5, 7, 1, 3, 2, 9, 11];

/* ======= reduce & Math.min ======= */

function solution(arr) {
  return arr.reduce((acc, cur) => Math.min(acc, cur));
}

console.log('solution --->', solution(arr));

/* ======= Math.min & spread Array ======= */

function solution2(arr) {
  return Math.min(...arr);
}
console.log('solution2 --->', solution2(arr));

/* ======= for & MAX_SAFE_INTEGER ======= */

function solution3(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log('solution3 --->', solution3(arr));
