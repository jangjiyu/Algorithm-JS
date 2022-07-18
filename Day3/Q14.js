// 14. 나누어 떨어지는 숫자 배열
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.


function solution(arr, divisor) {
  let answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]); 
    }
  }
  if (answer.length === 0) {
    return [-1];
  } else {
    return answer.sort((a, b) => a - b);
  }
}

const arr = [5, 9, 7, 10];
const divisor = 5;
const arr2 = [2, 36, 1, 3];
const divisor2 = 1;
const arr3 = [3,2,6];
const divisor3 = 10;

console.log(solution(arr, divisor));
console.log(solution(arr2, divisor2));
console.log(solution(arr3, divisor3));
