/**
 * -----------------------------
 *	5. 문자열 압축
 * -----------------------------
 *	알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에
 *  반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략합니다.
 *
 * > 첫 줄에 압축된 문자열을 출력한다.
 *
 * * 입력 - 'KKHSSSSSSSE'
 * * 출력 - 'K2HS7E
 */

let str = 'KKHSSSSSSSE';

function solution(str) {
  let result = '';
  let count = 1;
  str = str + ' ';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      result += str[i];
      if (count > 1) result += count;
      count = 1;
    }
  }
  return result;
}

console.log('solution --->', solution(str));
