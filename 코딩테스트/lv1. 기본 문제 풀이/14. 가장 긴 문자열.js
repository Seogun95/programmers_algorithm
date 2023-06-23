/**
* -----------------------------
*	14. 가장 긴 문자열
* -----------------------------
*	N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
*
* > 첫 줄에 가장 긴 문자열을 출력한다.
*
* * 입력 - ['teacher', 'time', 'student', 'beautiful', 'good']
* * 출력 - beautiful

*/

function solution(str) {
  return str.reduce((acc, cur) => {
    if (cur.length > acc.length) {
      return cur;
    } else {
      return acc;
    }
  });
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log('solution --->', solution(str));
