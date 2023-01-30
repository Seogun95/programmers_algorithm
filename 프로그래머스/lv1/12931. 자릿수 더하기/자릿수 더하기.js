/*=====첫번째 방법*/
function solution(n) {
    let result = 0;
    let arr = `${n}`.split('').map((i) => Number(i));

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

/*=====두번째 방법*/
function solution(n) {
    let result = 0;
    let arr = `${n}`.split('').map(Number); 

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

/*=====세번째 방법*/
function solution(n) {
    var answer = 0;
    //var a = n.toString().split('');
    var a = [...n.toString()];
    for (let i = 0; i < a.length; i++) answer += parseInt(a[i]);
    return answer;
}
