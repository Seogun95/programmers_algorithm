/**
 * -----------------------------
 *	16. 중복문자제거
 * -----------------------------
 *	소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
 * 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
 *
 * > 첫 줄에 중복문자가 제거된 문자열을 출력합니다.
 *
 * * 입력 - ksekkset
 * * 출력 - kset
 */

/* ======= new Set ======= */

function solution(n) {
  return [...new Set(n)].join('');
}

console.log('solution --->', solution('ksekkset'));

/* ======= filter ======= */

function solution2(n) {
  let arr = Array.from(n);
  return arr.filter((v, i) => arr.indexOf(v) === i).join('');
}

console.log('solution2 --->', solution2('ksekkset'));

/* ======= reduce ======= */

function solution3(n) {
  return Array.from(n)
    .reduce((acc, cur) => {
      if (!acc.includes(cur)) acc.push(cur);
      return acc;
    }, [])
    .join('');
}

console.log('solution3 --->', solution3('ksekkset'));
