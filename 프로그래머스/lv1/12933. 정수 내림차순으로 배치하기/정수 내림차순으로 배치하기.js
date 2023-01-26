
function solution(n) {
    return (`${n}`).split('').sort((a, b)=> b-a).join('') * 1;
}

/* 1
function solution(n) {
    let toString = `${n}`;
    return parseInt([...toString].sort().reverse().join(''));
}
*/

/* 2
function solution(n) {
    let toString = `${n}`.split('');
    return parseInt(toString.sort((a, b)=> b-a).join(''));
}
*/

/* 3
function solution(n) {
    let toString = `${n}`;
    return parseInt([...toString].sort((a, b)=> b-a).join(''));
}
*/
