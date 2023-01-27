function solution(s) {
        let answer = '';

    let center = Math.floor(s.length / 2);

    if (s.length % 2 === 1) {
        answer = s.substr(center, 1);
    } else {
        answer = s.substr(center - 1, 2);
    }
    return answer;
}