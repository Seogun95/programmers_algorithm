/**
* -----------------------------
*	6. 격자판 최대합
* -----------------------------
* 문제 설명 - 코딩테스트/lv2. 2차원 배열 탐색/6. 격자판 최대합.md
*
* > 최대합을 출력합니다.
*
* * 입력 -
  let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

* * 출력 - 155
*/

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

/**
 * -----------------------------
 * TODO 2차원 배열
 * -----------------------------
 *  1. 각 행의 합 : [i]번째 배열의 [j]번을 돌면서 행의 총 합을 구한다.
 *  2. 각 열의 합 : [j]번째를 도는데, [i]번째는 고정해서 열의 총 합을 구한다.
 *  3. 대각선의 합(왼쪽) : [i]번째의 [i]를 돌아 왼쪽 대각선의 합을 구한다.
 *  4. 대각선의 합(오른쪽) : [i]번째의 [arr.length - i - i]을 해서 오른쪽 대각선의 합을 구한다.
 */

function solution(arr) {
  let length = arr.length;
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = (sum2 = 0);

  for (let i = 0; i < length; i++) {
    sum1 = sum2 = 0;
    //열과 행의 합
    for (let j = 0; j < length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    //열과 행의 합 중 최대값
    answer = Math.max(answer, sum1, sum2);
  }
  //arr의 대각선 합
  sum1 = sum2 = 0;
  for (let i = 0; i < length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][length - i - 1];
  }
  // 열과 행 합 중 최대값과 양쪽 대각선 최대값을 비교
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

console.log('solution --->', solution(arr));
console.log('solution --->', solution(arr));
