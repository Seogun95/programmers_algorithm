function solution(n) {
    let answer = '';
    for (let i = 0; i < n; i++) {
        answer += i % 2 == 0 ? '수' : '박';
    }
    console.log(answer);
    return answer;
}