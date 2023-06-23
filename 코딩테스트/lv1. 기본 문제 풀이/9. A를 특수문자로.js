/**
 * -----------------------------
 *	9. A를 특수문자로
 * -----------------------------
 *대문자로 이루어진 영어단어가 입력되면 단어에 포함된
 * ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
 *
 * > 첫 번째 줄에 바뀐 단어를 출력한다.
 *
 * * 입력 - BANANA
 * * 출력 - B#N#N#
 */

/* ======= split String & map ======= */

function solution(text) {
  let splitText = text.split('');
  let result = splitText.map(v => {
    if (v === 'A') return '#';
    else return v;
  });
  return result.join('');
}

console.log('solution --->', solution('BANANA'));

/* ======= RegEx & replace ======= */

function solution2(n) {
  return n.replace(/A/g, '#');
}

console.log('solution2 --->', solution2('BANANA'));
