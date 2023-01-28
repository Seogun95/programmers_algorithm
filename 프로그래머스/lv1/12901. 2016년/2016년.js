function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let getMonth = (a -= 1);
    let date = week[new Date(2016, a, b).getDay()];
    return date;
}
