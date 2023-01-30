function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = week[new Date(2016, a - 1, b).getDay()];
    return date;
}
