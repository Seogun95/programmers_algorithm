 function solution(strings, n) {
            let answer = [];
            let result = [];

            strings.filter((value, index) => {
                answer.push(strings[index][n] + strings[index]);
            });

            answer.sort();

            answer.forEach((value) => {
                result.push(value.substr(1));
            });

            return result
        }