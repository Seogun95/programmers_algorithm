/**
 * -----------------------------
 *	13. 대소문자 변환
 * -----------------------------
 *	대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
 *
 * > 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
 *
 * * 입력 - StuDY
 * * 출력 - sTUdy
 */

function solution(n) {
  result = '';
  Array.from(n).map(v => {
    if (v === v.toUpperCase()) result += v.toLowerCase();
    else result += v.toUpperCase();
  });
  return result;
}

console.log('solution --->', solution('StuDY'));

/* ======= Regex ======= */

function solution2(n) {
  return n.replace(/[a-zA-Z]/g, match => {
    if (match === match.toUpperCase()) return match.toLowerCase();
    else return match.toUpperCase();
  });
}

console.log('solution2 --->', solution2('StuDY'));
