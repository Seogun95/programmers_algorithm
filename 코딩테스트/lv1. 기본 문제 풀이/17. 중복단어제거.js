/**
 * -----------------------------
 *	17. 중복단어제거
 * -----------------------------
 *	N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
 * 출력하는 문자열은 원래의 입력순서를 유지합니다.
 *
 * > 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
 *
 * * 입력 - ['good', 'time', 'good', 'time', 'student']
 * * 출력 - ['good', 'time', 'student']
 */

let arr = ['good', 'time', 'good', 'time', 'student'];

/* ======= new Set ======= */

function solution(arr) {
  return [...new Set(arr)];
}

console.log('solution --->', solution(arr));

/* ======= filter ======= */

function solution2(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}

console.log('solution2 --->', solution2(arr));

/* ======= reduce ======= */

function solution3(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log('solution3 --->', solution3(arr));
