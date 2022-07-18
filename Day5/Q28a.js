const x = 10;
const x2 = 12;
const x3 = 11;
const x4 = 13;

function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(148))
console.log(Harshad(x));
console.log(Harshad(x2));
console.log(Harshad(x3));
console.log(Harshad(x4));