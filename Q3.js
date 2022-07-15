// Q) 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 제한사항 : s는 길이가 1 이상, 100이하인 스트링입니다.



// 2로 나눴을 때 나머지가 0이면 짝수
// 짝수일 땐 문자열 길이를 반으로 나눈 지점 -1부터 2글자 반환
// 홀수일 땐 문자열 길이를 반으로 나눠 반올림한 지점부터 1글자 반환

// [새로 알게 된 함수]문자열.substr(start, length) : 문자열에서 특정한 구간의 문자열을 추출


const a = "abcde";
const b = "asdf";

function solution(s) {
    var answer = '';
    if (s.length % 2 == 0) {
        answer = s.substr((s.length/2 - 1), 2);
    } else {
        answer = s.substr(Math.floor(s.length/2), 1);
    }
    return answer;
}

console.log(solution(a));
console.log(solution(b));

console.log(solution("sparta"));