function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        answer += numbers.includes(i) ? 0 : i
    }
    console.log(answer);
    return answer;
}