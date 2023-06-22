/**
 * -----------------------------
 * 4. 1부터 N까지의 합
 * -----------------------------
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 * > 첫 번째 줄에 1부터 N까지의 합을 출력한다.
 *
 * 입력 - 6
 * 출력 - 21
 */

/* ======= for문 ======= */

function solution(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(solution(10));

/* ======= Array.from & reduce ======= */

/**
 * -----------------------------
 * Array.from({index: n}, callback)
 * -----------------------------
 */
function solution2(n) {
  return Array.from({ length: n + 1 }, (_, index) => index).reduce(
    (arr, cur) => arr + cur,
    0,
  );
}

console.log(solution2(10));
