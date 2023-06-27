/**
 * -----------------------------
 *	1. 회문문자열
 * -----------------------------
 *  앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
 *  문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
 *  단 회문을 검사할 때 대소문자를 구분하지 않습니다.
 *
 *  > 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
 *
 * * 입력 - gooG
 * * 출력 - YES
 */

/* ======= for ======= */

let str = 'gooG';

function solution(n) {
  let length = n.length;
  n = n.toLowerCase();
  for (let i = 0; i < length / 2; i++) {
    if (n[i] !== n[length - 1 - i]) return 'NO';
  }
  return 'YES';
}

console.log('solution --->', solution(str));

/* ======= reverse & split & join ======= */

function solution2(n) {
  n = n.toLowerCase();
  if (n.split('').reverse().join('') === n) return 'YES';
  else return 'NO';
}

console.log('solution2 --->', solution2(str));

/* ======= split & every ======= */

function solution3(n) {
  n = n.toLowerCase();

  if (n.split('').every((char, i) => char === n[n.length - 1 - i]))
    return 'YES';
  else return 'NO';
}

console.log('solution3 --->', solution3(str));
