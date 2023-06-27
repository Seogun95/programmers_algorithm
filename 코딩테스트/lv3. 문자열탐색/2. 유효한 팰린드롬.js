/**
 * -----------------------------
 *	2. 유효한 팰린드롬
 * -----------------------------
 *	앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
 *  문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
 *  단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
 *
 *  > 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.
 *
 *  * 입력 - let str="found7, time: study; Yduts; emit, 7Dnuof";
 *  * 출력 - YES
 */

let str = 'found7, time: study; Yduts; emit, 7Dnuof';

/* ======= replace로 알파벳만 추출 ======= */

function solution(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str.split('').reverse().join('') === str) return 'YES';
  else return 'NO';
}

console.log('solution --->', solution(str));

/* ======= for문으로 알파벳만 추출 ======= */

function solution2(str) {
  str = str.toLowerCase();
  let letter = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      letter += str[i];
    }
  }

  if (letter.split('').reverse().join('') === letter) return 'YES';
  else return 'NO';
}

console.log('solution2 --->', solution2(str));
