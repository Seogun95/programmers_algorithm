function solution(n) {
    let toString = `${n}`;
    return parseInt([...toString].sort().reverse().join(''));
}