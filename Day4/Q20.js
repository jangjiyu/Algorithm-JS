// 20. 완주하지 못한 선수
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion2 = ["josipa", "filipa", "marina", "nikola"];

const participant3 = ["mislav", "stanko", "mislav", "ana"];
const completion3 = ["stanko", "ana", "mislav"];



function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]
    }
  }
}

console.log(solution(participant, completion));
console.log(solution(participant2, completion2));
console.log(solution(participant3, completion3));







// 결과는 제대로 나오지만 효율성 통과 못 함.
// splice()가 시간 복잡도를 많이 사용하였고, 게다가 for문이 끝까지 돌아가야하므로 성능면에서 빵점
function solution2(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    participant.splice(participant.indexOf(completion[i]), 1);
  }
  return participant.join();
}

console.log(solution2(participant, completion));
console.log(solution2(participant2, completion2));
console.log(solution2(participant3, completion3));
