// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건 : phone_number는 길이 4 이상, 20이하인 문자열입니다.

// [문제 분리]
// 번호 뒷 4자리 제외한 숫자 모두 *로 바꾸기
// [로직으로 분리]
// phone_number = 문자열
// 번호 뒷 4자리 가져오기
// 번호 뒷 4자리 제외 문자열 개수 세기
// 그 개수만큼 “*”.repeat하기 + 뒤에 번호 뒷자리 붙이기


function solution(phone_number) {
    const Bnum = phone_number.substr(-4, 4)
    const Fnum_length = phone_number.substring(0, phone_number.length-4).length
    const a = phone_number.length;
    const b = phone_number.length-4;
    const c = phone_number.substring(0, 6);
    console.log(a, b, c);
    let answer = "*".repeat(Fnum_length)+Bnum
    return answer
}

console.log(solution("01012345678"));
console.log(solution("0211112222"));


// substr(-1, 4) 뒤에서 첫번째부터 4개 가져오기는 되지 않는다.. 왜...?
// str.substr(시작 인덱스, 추출 개수)
// str.substring(시작 인덱스번호, 끝 인덱스번호)
// Q9a.js에 보면 slice() 사용한 예제 있음

// substr(), substring(), slice() 차이점 알기.

console.log(("1234567".substring(0,2)));
