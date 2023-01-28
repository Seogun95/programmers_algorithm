function solution(seoul) {
    let result = '';
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            result += `김서방은 ${i}에 있다`;
        }
    }
    return result;
}