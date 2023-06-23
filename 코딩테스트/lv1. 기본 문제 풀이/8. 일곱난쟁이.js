/**
 * -----------------------------
 *	8. 일곱난쟁이
 * -----------------------------
 *	왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
 * 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
 * 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.
 * 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을기억해 냈다.
 * 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 *
 * > 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
 *
 * 입력 - [22, 7, 21, 19, 10, 15, 25, 8, 13]
 * 출력 - [22, 7, 10, 15, 25, 8, 13]
 */

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];

/* ======= nested for loop ======= */

function solution(arr) {
  const sumOfArr = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sumOfArr - (arr[i] + arr[j]) === 100) {
        // j보다 i를 먼저 splice하게되면 배열이 밀리기 때문에 뒤에있는 index인 j를 짜르면 배열이 밀리지 않는다.
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
}

console.log('solution --->', solution(arr));

/* ======= filter in for ======= */

function solution2(arr) {
  let sumOfArr = arr.reduce((arr, cur) => arr + cur, 0);

  let result = arr.filter((_, index) => {
    for (let j = index + 1; j < arr.length; j++) {
      sumOfArr - (arr[index] - arr[j]) === 100 ? false : true;
    }
    return true;
  });
  return result;
}

console.log('solution2 --->', solution2(arr));
