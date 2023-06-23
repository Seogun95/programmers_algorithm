/**
 * -----------------------------
 *	12. 대문자로 통일
 * -----------------------------
 *	대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.
 *
 * > 첫 줄에 대문자로 통일된 문자열이 출력된다.
 *
 * * 입력 - ItisTimeToStudy
 * * 출력 - ITISTIMETOSTUDY
 */

/* ======= replace & match callback ======= */

function solution(n) {
  return n.replace(/[a-z]/g, match => match.toUpperCase());
}

console.log('solution --->', solution('ItisTimeToStudy'));

/* ======= for of & toLower/toUpperCase() ======= */

function solution2(n) {
  let result = '';
  for (let letter of n) {
    if (letter === letter.toLowerCase()) {
      result += letter.toUpperCase();
    } else {
      result += letter;
    }
  }
  return result;
}

console.log('solution2 --->', solution2('ItisTimeToStudy'));

/* ======= for of & ASCII ======= */

/**
 * -----------------------------
 *	아스키 코드 값 차이
 * -----------------------------
 * 밑에서 ascii - 32는 letter에 해당하는 소문자의 ASCII 코드에서 32를 뺀 값입니다.
 * 이를 통해 해당 소문자에 대응하는 대문자의 ASCII 코드를 얻습니다.
 * * 예를 들어, 'a'의 소문자 ASCII 코드인 97에서 32를 뺀 값은
 * * 65로 대문자 'A'의 ASCII 코드입니다.
 *
 */

function solution3(n) {
  let result = '';
  for (let letter of n) {
    let ascii = letter.charCodeAt();
    if (ascii >= 97 && ascii <= 122) result += String.fromCharCode(ascii - 32);
    else result += letter;
  }
  return result;
}

console.log('solution3 --->', solution3('ItisTimeToStudy'));

// 아스키 코드를 사용해서 대문자 -> 소문자로 바꿔보자

function solution4(n) {
  let result = '';
  for (let letter of n) {
    let ascii = letter.charCodeAt();
    if (ascii >= 65 && ascii <= 90) result += String.fromCharCode(ascii + 32);
    else result += letter;
  }
  return result;
}

console.log('solution4 --->', solution4('ItisTimeToStudy'));
