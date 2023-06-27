/**
 * -----------------------------
 *	3. 숫자만 추출
 * -----------------------------
 *	문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
 *  만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
 *  추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
 *
 * > 첫 줄에 자연수를 출력합니다.
 *
 * * 입력 - let str = '000g0en2T0s8eSoft';
 * * 출력 - 208
 */

let str = '000g0en2T0s8eSoft';

/* ======= replace로 숫자만 추출  ======= */

function solution(str) {
  return parseInt(str.replace(/[^0-9]/g, ''));
}
console.log('solution --->', solution(str));

/* ======= for문으로 숫자만 추출  ======= */

function solution2(str) {
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      letter += str[i];
    }
  }
  return parseInt(letter);
}

console.log('solution2 --->', solution2(str));

/* ======= for of문으로 숫자만 추출 ======= */

function solution3(str) {
  let letter = '';
  for (let x of str) {
    if (x >= 0 && x <= 9) {
      letter += x;
    }
  }
  return parseInt(letter);
}

console.log('solution3 --->', solution3(str));

/* ======= isNaN ======= */

function solution4(str) {
  let letter = '';
  for (let x of str) {
    if (!isNaN(x)) letter += x;
  }
  return parseInt(letter);
}

console.log('solution4 --->', solution4(str));
