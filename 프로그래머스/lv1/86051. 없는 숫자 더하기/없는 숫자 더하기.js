function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers.includes(i)) {
            answer += 0;
        } else {
            answer += i;
        }
    }
    console.log(answer);
    return answer;
}