function solution(arr) {
    let answer = 0;
    let sum = 0;

    arr.forEach((_, i) => {
        answer += arr[i];
    });
    return answer / arr.length;
}
