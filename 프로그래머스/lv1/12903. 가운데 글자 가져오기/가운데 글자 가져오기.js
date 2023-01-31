function solution(s) {
    let center = ~~(s.length / 2);
    return (s.length % 2 === 1) ? s.substr(center, 1) : s.substr(center - 1, 2);
}