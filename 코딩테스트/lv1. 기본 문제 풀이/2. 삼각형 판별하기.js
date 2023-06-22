/**
 * -----------------------------
 * 2. 삼각형 판별하기
 * -----------------------------
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
 * > 첫 번째 줄에 “YES", "NO"를 출력한다.
 *
 */

/* ======= reduce & filter ======= */
function solution(a, b, c) {
  const max = [a, b, c].reduce((acc, cur) => Math.max(acc, cur));
  return [a, b, c].filter(v => v !== max).reduce((acc, cur) => acc + cur) > max
    ? 'YES'
    : 'NO';
}

console.log(solution(13, 33, 17));

/* ======= sort & 구조분해할당 ======= */
function solution2(a, b, c) {
  const sortNumber = [a, b, c].sort((x, y) => x - y);
  const [first, second, max] = sortNumber;

  if (first + second > max) return 'YES';
  else return 'NO';
}

console.log(solution2(13, 33, 17));
