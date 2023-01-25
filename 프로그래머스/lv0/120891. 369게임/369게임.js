function solution(order) {
    let toString = String(order);
    let arr = [...toString];
    let result = arr.filter((i) => i === '3' || i === '6' || i === '9');
    return result.length
}