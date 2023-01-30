function solution(num) {
    var answer = 0;

    while (num !== 500 && num !== 1) {
        num % 2 === 0 ? (num /= 2) : (num *= 3 + 1);
        answer++;
    }
    return answer == 1 ? answer : -1;
}