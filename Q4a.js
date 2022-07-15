// Math.abs() 함수는 주어진 숫자의 절대값을 반환
// 양 끝의 합 * 양 끝의 합의 개수
// 가우스 공식

function adder(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}
console.log(adder(3, 5))
console.log(adder(5, 3))

console.log(adder(-3, 1))
console.log(adder(1, 1))




// 파라미터에 변수 선언(s=0)해서 깔끔하게
function adder2(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}