/*====첫번째 방법*/
function solution(x) {
    let str = `${x}`.split('');
    let backToIntArr = str.map((x) => parseInt(x));
    let addAll = backToIntArr.reduce((a, b) => a + b);
    return x % addAll === 0 ;
}

/*====두번째 방법*/
function solution(x) {
    let str = `${x}`.split('').map((x) => parseInt(x)).reduce((a, b) => a + b) 
    return x % str === 0;
}


/*====두번째 방법을 풀어보면 이러하다*/
function solution(x) {
    let str = `${x}`.split('').map((x) => parseInt(x)).reduce((a, b) => a + b) 
    return x % str === 0 ? true : false;
}
