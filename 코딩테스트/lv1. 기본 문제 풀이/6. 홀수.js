/**
 * -----------------------------
 *	6. 홀수
 * -----------------------------
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
 * 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 *
 * 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
 * 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
 * '77 + 41 + 53 + 85 = 256' 이 되고,
 * '41 < 53 < 77 < 85' 이므로,
 * 홀수들 중 최소값은 41이 된다.
 *
 * > 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
 *
 * * 입력 - [12, 77, 38, 41, 53, 92, 85]
 * * 출력 - 256 / 41
 */

let arr = [12, 77, 38, 41, 53, 92, 85];

/* ======= filter & reduce & Math.min - 문자열 출력 ======= */

function solution(arr) {
  let getOdd = arr.filter(v => v % 2);
  let sumOfOdd = getOdd.reduce((acc, cur) => acc + cur, 0);
  let minOfOdd = Math.min(...getOdd);

  return `${sumOfOdd}\n${minOfOdd}`;
}

console.log(solution(arr));

/* ======= filter & reduce & Math.min - 배열 출력 ======= */

function solution2(arr) {
  let answer = [];
  let getOdd = arr.filter(v => v % 2);
  answer.push(getOdd.reduce((acc, cur) => acc + cur, 0));
  answer.push(Math.min(...getOdd));

  return answer;
}

console.log(solution2(arr));
