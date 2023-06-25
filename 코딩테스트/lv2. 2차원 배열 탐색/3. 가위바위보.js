/**
 * -----------------------------
 *	3. 가위바위보
 * -----------------------------
 * A, B 두 사람이 가위바위보 게임을 합니다.
 * 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다.
 * 비길 경우에는 D를 출력합니다.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 *
 * > 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
 *
 * * 입력 - a = [2, 3, 3, 1, 3], b = [1, 1, 2, 2, 3]
 * * 출력 - AAABD
 */

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

/* ======= for - if / else if ======= */

function solution(a, b) {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) result += 'D';
    else if (a[i] === 1 && b[i] === 3) result += 'A';
    else if (a[i] === 2 && b[i] === 1) result += 'A';
    else if (a[i] === 3 && b[i] === 2) result += 'A';
    else result += 'B';
  }
  return result;
}

console.log('solution --->', solution(a, b));

/* ======= mapping ======= */

let gameMapping = {
  '1 & 3': 'A',
  '2 & 1': 'A',
  '3 & 2': 'A',
  '1 & 2': 'B',
  '2 & 3': 'B',
  '3 & 1': 'B',
};

function solution2(a, b) {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) result += 'D';
    else result += gameMapping[`${a[i]} & ${b[i]}`];
  }
  return result;
}

console.log('solution2 --->', solution2(a, b));
