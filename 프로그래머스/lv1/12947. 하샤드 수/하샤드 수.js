function solution(x) {
    let str = `${x}`.split('');
    let backToIntArr = str.map((x) => parseInt(x));
    let addAll = backToIntArr.reduce((a, b) => a + b);
    return x % addAll === 0 ;
}