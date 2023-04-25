const solution = (right, left) => {
    let answer = 0;
    for(let i = right; i <= left; i++) {
        let count = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) count++
        }
        if(count % 2 === 0) answer += i
        else answer -= i
    }
    return answer
}