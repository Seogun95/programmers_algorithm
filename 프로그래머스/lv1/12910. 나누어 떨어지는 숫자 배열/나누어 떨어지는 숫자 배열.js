function solution(arr, divisor) {
    let answer = [];

    arr.forEach((value) => {
        if (value % divisor == 0) {
            answer.push(value);
        }
    });
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}