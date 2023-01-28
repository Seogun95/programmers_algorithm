function solution(arr, divisor) {
    let answer = [];

    arr.forEach((index) => {
        if (index % divisor == 0) {
            answer.push(index);
        }
    });
    console.log(answer);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}