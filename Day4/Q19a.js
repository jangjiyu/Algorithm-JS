function solution(n) {
  return "수박".repeat(n).substring(0,n)
}


const n = 3;  // "수박수"
const n2 = 4; // "수박수박"

console.log(solution(n));
console.log(solution(n2));