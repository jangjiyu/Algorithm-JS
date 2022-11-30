// 가장 긴 하위 배열 구하기
// [참고] https://velog.io/@9ummy/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%88%AC-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EA%B5%AC%EA%B0%84-%ED%95%A9-JavaScript

const a = [1, 2, 3];
const n = 3; // 배열 a의 요소수
const k = 4; // 정수

[1], [2], [3], [1, 2], [2, 3], [1, 2, 3]; // 연속된 하위 배열
// 요소의 합 <= k
// [1], [2], [3], [1, 2] -> 가장 긴 배열의 길이: 2
// answer = 2

const a2 = [3, 1, 2, 1];
const n2 = 4;
const k2 = 4;

[3], [1], [2], [1], [3, 1], [1, 2], [2, 1], [1, 2, 1];
// answer = 3

function maxLength(a, k) {
  let arr = [];
  let sum = 0;
  let end = 0;

  // 시작점 start를 배열 시작부터 오른쪽으로 한 칸씩 옮김
  for (let start = 0; start < a.length; start++) {
    // 끝점 end를 가능한 만큼 이동시킴
    while (sum <= k && end < a.length) {
      sum += a[end];
      end++;

      if (sum <= k) {
        arr.push(end - start);
      }
    }
    sum -= a[start];
  }

  const answer = Math.max(...arr);

  return answer;
}

console.log(maxLength(a, k));
