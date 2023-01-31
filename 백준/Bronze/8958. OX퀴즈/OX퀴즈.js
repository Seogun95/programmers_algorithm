// let input = require('fs').readFileSync('백준/8958_OX퀴즈/index.txt').toString().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    let result = 0;
    let count = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            count++;
        } else {
            count = 0;
        }
        result += count;
    }
    console.log(result); //10
}
