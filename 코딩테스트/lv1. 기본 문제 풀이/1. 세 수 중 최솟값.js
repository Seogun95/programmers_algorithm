/**
 * -----------------------------
 * 1. 세 수 중 최솟값
 * -----------------------------
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하
 * 세요.(정렬을 사용하면 안됩니다)
 *
 * * 입력 - 6 5 11
 * * 출력 - 5
 */

/* ======= if ======= */

function solution(a, b, c) {
  let answer;

  if (a <= b && a <= c) answer = a;
  else if (b <= a && b <= c) answer = b;
  else if (c <= a && c <= b) answer = c;
  return answer;
}
console.log(solution(2, 5, 1));

/* ======= reduce & Math.min ======= */

function solution2(a, b, c) {
  return [a, b, c].reduce((min, current) => Math.min(min, current));
}

console.log(solution2(2, 5, 1));
