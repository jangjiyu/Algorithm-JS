// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

/*
[문제 설명]
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

const n1 = 3;
const m1 = 12;
const n2 = 2;
const m2 = 5;

function solution(n, m) {
  let answer = [];
  let max = Math.max(n, m);
  let min = Math.min(n, m);

  for (let i = min; i > 0; i--) {
    if (max % i === 0 && min % i === 0) {
      answer.push(i);
      answer.push(i * (min / i) * (max / i));
      break;
    }
  }

  return answer;
}

console.log(solution(n1, m1)); // [3, 12]
console.log(solution(n2, m2)); // [1, 10]
