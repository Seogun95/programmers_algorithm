/**
 * -----------------------------
 *	11. 대문자 찾기
 * -----------------------------
 *	한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
 *
 * > 첫 줄에 대문자의 개수를 출력한다.
 *
 * * 입력 - KoreaTime
 * * 출력 - 2
 */

/* ======= map & filter ======= */

function solution(n) {
  return Array.from(n)
    .map(v => v)
    .filter(v => v === v.toUpperCase()).length;
}

console.log('solution --->', solution('KoreaTime'));

/* ======= for of & toUppercase() ======= */

function solution2(n) {
  let count = 0;
  for (let letter of n) {
    if (letter === letter.toUpperCase()) count++;
  }
  return count;
}

console.log('solution2 --->', solution2('KoreaTime'));

/* ======= for of & ASCII ======= */

/**
 * -----------------------------
 *	아스크 코드 넘버
 * -----------------------------
 * * 대문자 : 65 ~ 90 (25 + 1) = 대문자 알파벳 개수는 26개
 * * 소문자 : 97 ~ 122 (25 + 1) = 소문자 앒파벳 개수는 26개
 */

function solution3(n) {
  let count = 0;
  for (let letter of n) {
    let num = letter.charCodeAt();
    if (num >= 65 && num <= 90) count++;
  }
  return count;
}

console.log('solution3 --->', solution3('KoreaTime'));

/* ======= RegEx ======= */

function solution4(n) {
  return n.match(/[A-Z]/g).length;
}

console.log('solution4 --->', solution4('KoreaTime'));
