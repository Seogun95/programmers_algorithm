/**
* -----------------------------
*	10. 문자 찾기
* -----------------------------
*	한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에
* 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
* 문자열의 길이는 100을 넘지 않습니다.
*
* > 첫 줄에 해당 문자의 개수를 출력한다.
*
* ? 입력
   COMPUTERPROGRAMMING
   R
* ? 출력 - 3
*/

/* ======= split ======= */

function solution(a, text) {
  const result = text.split(a).length;
  return result - 1;
}

console.log('solution --->', solution('R', 'COMPUTERPROGRAMMING'));

/* ======= Array.from & map ======= */

function solution2(a, text) {
  let count = 0;
  Array.from(text).map(v => (v === a ? count++ : v));
  return count;
}

console.log('solution2 --->', solution2('R', 'COMPUTERPROGRAMMING'));

/* ======= RegExp ======= */

function solution3(a, text) {
  let regex = new RegExp(a, 'g');
  return text.match(regex ?? []).length;
}

console.log('solution3 --->', solution3('R', 'COMPUTERPROGRAMMING'));
