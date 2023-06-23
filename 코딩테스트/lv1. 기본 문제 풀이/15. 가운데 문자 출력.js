/**
 * -----------------------------
 *	15. 가운데 문자 출력
 * -----------------------------
 *	소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 *
 * > 첫 줄에 가운데 문자를 출력합니다.
 *
 * * 입력 - study
 * * 출력 - u
 */

/* ======= Math.floor & substr ======= */

function solution(n) {
  let middle = Math.floor(n.length / 2);
  if (n.length % 2 === 1) {
    return n.substr(middle, 1);
  } else {
    return n.substr(middle - 1, 2);
  }
}

console.log('solution --->', solution('study'));

/* ======= Math.floor &  ternary operator ======= */

function solution2(n) {
  let middle = Math.floor(n.length / 2);
  return n.length % 2 === 1 ? n[middle] : n[middle - 1] + n[middle];
}

console.log('solution2 --->', solution2('tape'));
