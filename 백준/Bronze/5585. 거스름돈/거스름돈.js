let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let result = 0;
let price = 1000 - input; //620
let walletArr = [500, 100, 50, 10, 5, 1];

for (let i = 0; i < walletArr.length; i++) {
    // ~~ == Math.floor
    //1. price에 walletArr의 배열을 나눴을때 얼마나 나눠질수 있는지 몫을 구해줌
    let floorToInt = ~~(price / walletArr[i]);
    //2. price에 i번째 배열을 나누고 i번째 배열을 다시 곱해 price에 값을 빼준다.
    price -= floorToInt * walletArr[i];

    /*
        620 -= (620/500 = 1) * 500 = 120    result += 1
        120 -= (120/100 = 1) * 100 = 20     result += 1
        20 -= (20/50 = 0) * 50 = 20
        20 -= (20/10 = 2) * 10 = 0          result += 2
        */

    //3. result에 나눈 몫 만큼을 하나씩 더해줌
    result += floorToInt;

    //4. price 가 0이라면 for문을 빠져나옴.
    if (price === 0) break;
}
console.log(result);
