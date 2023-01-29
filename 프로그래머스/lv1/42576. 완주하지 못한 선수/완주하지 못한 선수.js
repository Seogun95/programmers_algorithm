function solution(participant, completion) {
    let result = '';
    //participant와 completion을 정렬한다.
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] != completion[i]) {
            result = participant[i];
            break;
        }
    }

    console.log(result);
    return result;
}