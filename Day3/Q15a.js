function solution(a, b) {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}




function solution2(a, b) {
  return a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
}



var solution3=(a,b)=>a.reduce((a,c,i) => a+c*b[i], 0);




const a = [1,2,3,4];
const b = [-3,-1,0,2];


console.log(solution(a,b));
console.log(solution2(a,b));
console.log(solution3(a,b));