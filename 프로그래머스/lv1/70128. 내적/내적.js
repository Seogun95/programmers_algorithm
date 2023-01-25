function solution(a, b) {
    let result = 0;
    a.forEach((value, index) => {
        result += value * b[index];
    });
    return result;
}