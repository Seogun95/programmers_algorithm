/*====방법1*/
function solution(arr) {
    let answer = 0;
    let sum = 0;

    arr.forEach((_, i) => {
        answer += arr[i];
    });
    return answer / arr.length;
}
/*====방법1*/
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
