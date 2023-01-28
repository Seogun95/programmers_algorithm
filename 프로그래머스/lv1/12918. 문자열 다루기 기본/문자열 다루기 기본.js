function solution(s) {
    let isNumber = parseInt(s);
    if (s.length == 4 || s.length == 6) {
        if (s == isNumber) {
            return true;
        }
    }
    return false;
}