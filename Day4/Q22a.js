const n = 123;
const n2 = 987;

function solution(n) {
  return n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(n));   // 6
console.log(solution(n2));  // 24






function solution2(n){
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

console.log(solution2(n));   // 6
console.log(solution2(n2));  // 24



// 자바스크립트에서 덧셈 연산자 +를 사용할 때, 피연산자 중 어느 하나가 문자열이면 문자열이 아닌 다른 피연산자도 문자열로 타입이 변환되어 문자열을 합친 값이 반환됩니다. 
// 위의 예시에서 n+""은 숫자 + 문자열의 형태이기 때문에 결과적으로 문자열 n을 반환합니다. 참고로 ""은 빈문자열이기 때문에 연결해도 반환값에 영향을 주지 않습니다. 
// 그저 다른 피연산자를 문자열로 형변환하는 역할을 합니다. 따라서 String(n)과 동일하게 사용할 수 있습니다.

// Q) initial value에 0을 넣어주지 않으면 1자리 숫자에서 string을 반환하는데 그 이유가 뭘까요??
// A) reduce의 initial value는 첫 acc 값입니다. 즉, 0을 넣어서 acc 초기값을 정수화 해주는 겁니다("문자열 + 정수 = 문자열" 방지차원). initial value를 지정하지 않는다면 parseInt(acc) + parseInt(curr)로 하면 될 것 같습니다.






function solution3(n)
{
    var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
    //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}

console.log(solution3(n));   // 6
console.log(solution3(n2));  // 24