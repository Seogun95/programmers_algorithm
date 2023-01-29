/*=======첫번째방법*/
function solution(s) {
    let result = '';
    let removeSpace = s.split(' ');
    for (let i = 0; i < removeSpace.length; i++) {
        for (let j = 0; j < removeSpace[i].length; j++) {
            j % 2 === 0 ? result += removeSpace[i][j].toUpperCase() : result += removeSpace[i][j].toLowerCase();
        }
        result += ' ';
    }
    return result.slice(0, result.length - 1);
}

/*=======두번째방법*/
function solution(s) {
    let result = '';
    let removeSpace = s.split(' ');
    for (let i = 0; i < removeSpace.length; i++) {
        for (let j = 0; j < removeSpace[i].length; j++) {
            j % 2 === 0 ? result += removeSpace[i][j].toUpperCase() : result += removeSpace[i][j].toLowerCase();
        }
        result += ' ';
    }
    return result.slice(0, result.length - 1);
}

/*=======세번째방법*/
function solution(s) {
    let result = s
        .split(' ')
        .map((value) =>
            [...value].map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase())).join('')
        )
        .join(' ');
    return result
}

