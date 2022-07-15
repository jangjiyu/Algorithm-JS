// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
// 제한사항 : 1 ≤ numbers의 길이 ≤ 9 // 0 ≤ numbers의 모든 원소 ≤ 9 // numbers의 모든 원소는 서로 다릅니다.

// reduce()메소드는 배열을 반복하고 리듀서 함수를 호출하여 함수에 의한 배열 계산 값을 누산기에 저장합니다. 누산기는 배열을 통해 반복되는 누적 결과를 저장하기 위해 모든 반복에서 기억되는 변수입니다. 
// 이것을 사용하여 배열을 반복하고 요소의 값을 누산기에 추가하고 배열의 합계를 얻을 수 있습니다.

function solution(numbers) {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i=0; i < numbers.length; i++) {
        delete arr[numbers[i]];
    }
    const reducer = (accumulator, curr) => accumulator + curr;
    return arr.reduce(reducer);
}

const a= [0, 1, 2];
console.log(solution(a));






function solution2(numbers) {
    let cnt = 0;
    for(let i=0; i<10; i++){
        if(!(numbers.includes(i))) cnt+= i
    }
    return cnt
}

console.log(solution2(a));



