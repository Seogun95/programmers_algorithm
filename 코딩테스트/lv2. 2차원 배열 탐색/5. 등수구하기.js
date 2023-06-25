/**
 * -----------------------------
 *	5. 등수구하기
 * -----------------------------
 *	N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 *
 * > 입력된 순서대로 등수를 출력한다.
 *
 * * 입력 - [87, 89, 92, 100, 76]
 * * 출력 - [4, 3, 2, 1, 5]
 */

let arr = [87, 89, 92, 100, 76];

/* ======= 이중 for문 ======= */

function solution(arr) {
  let length = arr.length;
  let result = Array.from({ length }, () => length);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i] > arr[j]) result[i]--;
    }
  }
  return result;
}

console.log('solution --->', solution(arr));
