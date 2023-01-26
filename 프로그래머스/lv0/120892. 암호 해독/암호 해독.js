function solution(cipher, code) {
    let arr = [...cipher];
    let result = '';
    

    result += arr.filter((_, i) => (i + 1) % code === 0).join('');

    return result
}

