// 17. 문자열 다루기 기본

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.


const s = "a234";
const s2 = "1234";
const s3 = "1a2d";
const s4 = "1e22";  // 1의 22승으로 인식해서 parseInt() 쓰면 숫자로 변환됨. NaN 안 나옴.


function solution(s) {
  let answer;
  if(s.length === 4 || s.length === 6) {
    if(isNaN(s) || s.includes('e')) {
      answer = false;
    } else {
      answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution(s));   // F
console.log(solution(s2));  // T
console.log(solution(s3));  // F
console.log(solution(s4));  // F



// if문 정리
function solution2(s) {
  let answer;
  if( !(s.length === 4 || s.length === 6) ) {
    answer = false;
    return answer;
  } 
  if(isNaN(s) || s.includes('e')) {
    answer = false;
  } else {
    answer = true;
  }
  return answer;
}

console.log(solution2(s));   // F
console.log(solution2(s2));  // T
console.log(solution2(s3));  // F
console.log(solution2(s4));  // F




// if문 정리2
function solution3(s) {
  let answer;
  if( !(s.length === 4 || s.length === 6) ) {
    answer = false;
    return answer;
  } 
  return ( isNaN(s) || s.includes('e') ) ? answer = false :   answer = true;
}

console.log(solution3(s));   // F
console.log(solution3(s2));  // T
console.log(solution3(s3));  // F
console.log(solution3(s4));  // F





// 아래는 e를 제곱으로 인식해서 틀림
function solution4(s) {
  let answer;
  if(s.length === 4 || s.length === 6) {
    if(isNaN(s)) {
      answer = false;
    } else {
      answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution4(s));    // F
console.log(solution4(s2));   // T
console.log(solution4(s3));   // F
console.log(solution4(s4));   // T - 1e22를 1의 22승(숫자)으로 인식해서 true 반환.

