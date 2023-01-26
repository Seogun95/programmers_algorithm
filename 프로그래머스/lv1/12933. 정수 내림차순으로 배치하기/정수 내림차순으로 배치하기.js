function solution(n) {
    let toString = `${n}`;
    return parseInt([...toString].sort().reverse().join(''));
}

/*
function solution(n) {
    let toString = `${n}`.split('');
    return parseInt(toString.sort((a, b)=> b-a).join(''));
}
*/

/*
function solution(n) {
    let toString = `${n}`;
    return parseInt([...toString].sort((a, b)=> b-a).join(''));
}
*/
