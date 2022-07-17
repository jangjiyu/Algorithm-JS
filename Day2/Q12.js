// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수


// [문제 분리]
// 원래 이용료는 price
// 놀이기구 N번째 이용하면 원래 이용료의 N배를 받음
// 놀이기구 count번 타게 되면 현재 이용료money에서 얼마가 부족한 지 return 

// [로직으로 분리]
// price = 처음 이용료
// 프라이스 + (프라이스 X N번째) = N번째 이용료
// 결과는 money 


function solution(price, money, count) {
    let sum = 0;
    for (let i = 0; i < count; i++ ) {
        sum += price+(price*i);
    }
    return (sum - money > 0 ? sum - money : 0);
}


let price = 3;
let money = 20;
let count = 4;
console.log(solution(price, money, count));



function solution2(price, money, count) {
    let sum = 0;
    for (let i = 1; i <= count; i++ ) {
        sum += price*i;
    }
    return (sum > money ? sum - money : 0);
}

let price2 = 3;
let money2 = 20;
let count2 = 4;
console.log(solution2(price2, money2, count2));






