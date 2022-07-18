// 하샤드 수
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

const x = 10;
const x2 = 12;
const x3 = 11;
const x4 = 13;

function solution(x) {
  let str = x.toString();
  let sumArr = [];
  for (let i=0; i<str.length; i++) {
    sumArr.push(parseInt(str[i]));
  }
  let sum = sumArr.reduce((a,c)=>a+c,0);
  return (x % sum === 0) ? true : false
}

console.log(solution(x));
console.log(solution(x2));
console.log(solution(x3));
console.log(solution(x4));
