// condition ? exprIfTrue : exprIfFalse 
// 조건문 ? true일 때 실행할 식 : false 일 때 실행할 식


function solution(s) {
    return s.substr(Math.ceil(s.length/2) - 1, s.length % 2 === 0 ? 2 : 1);
}





console.log(solution("abcde"));



