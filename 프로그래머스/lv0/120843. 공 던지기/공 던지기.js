function solution(numbers, k) {
    //1. k번째 던졌을때 던져서 받는사람이 아니고 던진사람.
    //2. 인덱스에서 2만큼 간다.
    //3. 모든 시작은 1부터 시작한다.

    let result = 1;
    for (let i = 0; i < k - 1; i++) {
        result += 2;
        if (result > numbers.length) {
            result -= numbers.length;
        }
    }
    return result 
}

