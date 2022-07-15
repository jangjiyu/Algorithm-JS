// 0~9를 모두 더한 값인 45 - 배열 요소의 합

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

const a = [1, 2];
console.log(solution(a));
