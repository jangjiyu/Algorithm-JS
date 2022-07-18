// 21. 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.


const s = "try hello world";  // "TrY HeLlO WoRlD"
const s2 = "try hello  world";
const s3 = "try hello  world   JS";

function solution2(s) {
  s.toLowerCase();
  let answer = '';
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      index = 0;
    } else {
      if(index % 2 === 0) {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
      index++
    }
  }
  return answer;
}

console.log(solution2(s));
console.log(solution2(s2));
console.log(solution2(s3));





// 밑은 실패한 코드
function solution(s) {
  s.toLowerCase();
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      (i % 2 === 0) ? answer += s[i].toUpperCase() : answer += s[i].toLowerCase()
    } else {
      answer += ' ';
    }
  }
  return answer;
}

console.log(solution(s));
console.log(solution(s2));
console.log(solution(s3));
