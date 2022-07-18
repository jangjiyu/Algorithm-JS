const n = 121;
const n2 = 3;

function solution(n) {
  return Math.sqrt(n) % 1 == 0 ? Math.pow(Math.sqrt(n)+1,2) : -1
}

console.log(solution(n));
console.log(solution(n2));
