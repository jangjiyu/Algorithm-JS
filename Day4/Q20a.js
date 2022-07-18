const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion2 = ["josipa", "filipa", "marina", "nikola"];

const participant3 = ["mislav", "stanko", "mislav", "ana"];
const completion3 = ["stanko", "ana", "mislav"];





var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))


// 위 코드 풀이
var solution2=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

// 완주자 배열을 {이름:완주자배열에 등장하는 횟수}로 맵핑하고, 그 맵에 참가자 이름 하나씩 넣어서 찾아볼때마다 횟수 떨어뜨려서 횟수 0나오는 놈 찾아뱉는 함수

// 패터쓴님 답변 :
// 연구해보니 새님이 설명하신 것들(위 한 줄)이 정확하네요. 일단 _하고 $는 미니파이(minify)이자 고수들의 겉멋(?) 인것 같고, 새님의 풀어쓴 솔루션 보시면 될 것 같습니다. 
// 새님 솔루션() 기준으로 설명 드리면, participant.find(콜백 애로우 함수, 맵펑션) 이렇게 두개의 argument(전달인자)가 주어진거고, 뒤의 맵펑션이 콜백 전에 실행이 됩니다. 
// mdn 문서 참조하면 thisArg가 있는 부분인데, 이 두번째 argument 부분이 첫번째 보다 먼저 실행이 됩니다. 그러므로 함수가 시작이 되면 콜백 애로우 함수 보다 두번째 맵 함수가 먼저 실행이 됩니다.
// 그러면 맵 함수에서 하는 일은 무엇인가, 맵함수는 기본적으로 새로운 배열을 리턴하는데요, 여기서는 이 '리턴 되는 배열'은 의미가 없습니다. 
// 다만 첫번째 argument인 콜백 애로우 함수 보다 이 두번째 함수가 먼저 실행된다는 것이 중요합니다. 
// 콜백에서 중요한 작업을 하기전에 여기서 미리 기름칠을 해놓는 것으로 보시면 됩니다. 그러면 리턴은 버려지는데, 맵함수에서 하는 일은 무엇인고 하면 그 뒤에 적힌걸 뚫어져라 쳐다봐야겠죠 : completion[name]=(completion[name]|0)+1
// 먼저 completion 배열에 대한 map이므로 name은 completion의 각 인수를 의미하고, completion[name]을 정의를 하는데 (=), 뭐로 만드냐면, OR 을 사용해서, "만약 completion[name]이 존재하면, 그 값에 +1 을 한 것", 이고, "존재 안하면, 0 + 1 (즉 1이죠)"으로 정의해라. 라고 했습니다. 
// 그럼 여기서 뽀인트는 뭐냐면 "completion[name]"이 도대체 뭐냐, completion은 배열인데...!? (다음시간에..)

// 자바스크립트의 배열은 사실, 객체입니다. typeof 로 아무 배열 만드셔서 확인해보시면 오브젝트가 나오죠. 
// 그러므로 completion[name]을 하면 단순히 우리가 객체에서 'key-value' 페어에서 밸류 접근하듯이 "completion 객체 중 name이라는 키의 값이 뭐니" 가 됩니다. 
// 그리고 만약에 그런 키-밸류 페어가 존재하지 않으면 undefined를 리턴하게 되고, 이것은 false가 되므로, 위의 OR 구절에서 앞이 false였으므로 뒤의 값인 0 이 출동하게 되고, 실제로 정의되는 값은 0 + 1인 1 이되죠. 
// 그러므로 컴플리션 배열 안에 "하나만 있는 이름"은 모두 이름 : 1 이렇게 변하게 됩니다.
// 만약에 이름이 두개인 경우에는 completion[name]이 이미 존재해서 1 이라는 값을 리턴 할거고, 그러면 1 + 1 이되어서 2개가 되고, 이름이 더 많으면 뭐 계속 더해지겠죠. 
// completion 배열의 각 요소에 대해 이 작업을 끝내주면 이 '맵펑션' 부분의 존재 이유가 달성이 되고 completion은 처음에 인풋 받았던 배열이 아닌, 이름: 갯수 들이 "추가가 된" 배열이 되죠. 실제로 바뀐 배열을 체크해보면 이렇습니다. 
// ['cake', 'ball', 'sauce', 'cake', cake: 2, ball: 1, sauce: 1]. 조금 웃긴 모습이죠.
// 그럼 이제 준비 작업이 끝났고 본론으로 갑니다. 근데 이전에 이해를 돕기위해 하나 덧붙이자면, 이 준비작업은 단순히 준비작업이기 때문에 저 간지나는 펑션에서 빼내서 따로 적어도 됩니다. 
// 즉 이렇게 말이죠 : var solution = (participant,completion) => { completion.map(name => completion[name] = (completion[name]|0)+1); return participant.find((name) => !completion[name]--); }; 
// 가독성을 위하여 에디터에 넣으시고 엔터랑 스페이스바를 이용해서 정렬해서 보시길 권장합니다. 간단합니다, 저 뒤의 '맵펑션'을 위로 뺐을 뿐입니다.

// 본론으로 오면이제, 우리의 completion은 작업이 끝난 상태이므로 앞부분엔 모든 이름이 스트링으로 들어있고, 그거에 이어서 각 이름의 갯수가 키-밸류 패어로 들어있습니다. 
// 먼저 find는 뒤 테스트의 "트루"를 주는 첫번째 요소를 리턴합니다. 그러면 이제 !completion[name]-- 이게 무슨 테스트인지를 보고, 어떤 경우에 '트루'를 주느냐를 생각해보면 되겠죠.
// !completion[name]-- 여기서 중요한건 2개입니다. completion[name]은 다들 아시다시피 이제 그 해당 이름의 '갯수'를 불러올 거죠. 
// 중요1: 느낌표는 뭘하고있냐? 이건 간단히 느낌표 뒤의 값을 "불리언"으로 바꿔주는데, 반대로 바꿔줍니다. !true면 거짓이 나온다는 말이죠. 또 !0, !5, !''등 테스트를 해보세요. 참고로 자바스크립트에 '거짓'이 되는 밸류는 총 7개뿐입니다. (false, 0, -0, NaN, null, undefined, ''). 
// 중요2: -- 는 다 아시다시피 1을 삭감하는데, 여기서 중요한건 '후치'라는 겁니다. 즉 값을 불러오고, !을 통해 참거짓 판별을 하고, 그 열의 계산이 다 끝나고 다음 열로 갈 때야 값이 바뀌는거죠. "불러온 순간의 값"으로 참거짓 판별을 한다는 게 중요합니다.
// participant에 find를 했으므로 이제 모든 참가자의 이름을 갖고 completion에 이 이름이 몇 개 존재 했었나를 보게 됩니다. 
// 그러면 만약에 이름이 1개 였으면 "불려오는 순간에는 1이므로 이것은 불리언으로 보면 참", 그리고 find의 참거짓 판별은 앞의 ! 느낌표로 인해 참은 거짓으로 변해서 '거짓'이 됩니다. 
// 1 이상이었어도 마찬가지로 0이상의 숫자였을거니까, 거짓으로 판명이 나고 find 함수는 계속 이어집니다. 그러면 언제 "참"이 나오냐면, 그것은 completion[name]이 '거짓'이 되는 값을 반환했을 때 뿐입니다.
// 현 상황에서 completion[name] 을 수행한 후에 나올 수 있는 거짓이 될 값은 0 이거나, 아니면 'name'에 해당하는 페어가 completion에 존재하지 않을 때는 undefined를 리턴 하겠죠. 
// 그럼 false들을 리턴하게 되고, ! 로 인해서 true로 바뀌고 정답 개봉박두 하게되는거죠.
// 참고로 '0'을 리턴하는 경우에는 '동명의 참가자가 2명 이상 있었는데, 그중에 1명이 안들어왔을 때', 이고 undefined를 리턴하게 되는 경우는 '못들어온 이름이 1개 뿐이었고 그사람이 못들어왔을때' 입니다. 
// 여담으로 undefined에 ! 느낌표 때리고나서 후치로 -- 를 때려주면 해당 키밸류 페어가 존재하게 되고, 값은 NaN이 됩니다.
// 참고로 미천한 저는 단순히 둘다 소트 한 다음에 answer = participant.find((el, index) => el !== completion[index]); 이렇게 했는데, 제 해법보다 위의 해법이 속도가 훠어얼씬 빠르더라구요.

// 저거 쓰신 분들 덕에 재밌는 공부 했네요 감사드리구요. 위의 내용은 방금 저 멋진 솔루션을 보고, 경악을 금치못하고... 제가 mdn 다큐먼트 보면서 공부했던 부분들이라 제 이해나 설명이 틀린 부분이 있을 수 있습니다. 혹시 그렇다면 부디 지적을 해주세요. 
// 제 개인적으로 아직 의문이 남는 부분은 어레이에 들어가있는 키밸류 페어네요. 
// 예를들면 ['cake', 'ball', 'sauce', 'cake', cake: 2, ball: 1, sauce: 1] 요놈을 forEach로 해서 각 엘레멘트를 로깅 해보면 키밸류는 안나오더라구요. 넘나 댓글을 많이 달아버려서.. 스팸아니니까 괜찮길 바랍니다..ㅋㅋ



// 패터쓴님 감사해요! forEach로 키밸류가 안나오는 이유가 Symbol로 들어가서 라는데.. 저도 자세히는 모르겠어요.. 누가 답해주세요! 숫자로 안되는 이유는 completion[name]+1이 숫자로 계산돼서..!

// YuiN님 forEach로 안 나오는 이유는 속성(property)라서 그렇습니다. forEach는 배열의 요소에 대해서만 루프를 돌거든요. 
// 패터슨님 답변처럼 Javascript의 배열은 실제로 object이므로 배열 외에도 속성을 추가할 수 있어서 속성을 만들 수는 있지만 근래에 추가된 forEach 함수는 이런 속성에 대해서는 인정하지 않아야 한다는 신념이 들어간 것 같습니다. 
// 그래서인지 예전 문법인 for (var p in completion) console.log(p) 하면 배열의 요소와 속성이 함께 나오네요.

// 참고) 실제 업무에서... 일단 _, $이런거 변수명으로 쓰는건 당연히 안되고.. ㅋㅋㅋ 코드도 좀더 풀어쓰는게 좋을 것 같네요 ㅋㅋ 저정도면 애교로 봐줄수도있고.. 회바회인가..





function solution3(participant, completion) {
  const map = new Map();

  for(let i = 0; i < participant.length; i++) {
      let a = participant[i], 
          b = completion[i];

      map.set(a, (map.get(a) || 0) + 1);
      map.set(b, (map.get(b) || 0) - 1);
  }

  for(let [k, v] of map) {
      if(v > 0) return k;
  }

  return 'nothing';
}

console.log(solution3(participant, completion));
console.log(solution3(participant2, completion2));
console.log(solution3(participant3, completion3));

// map.set 메소드로 map에 새로운 객체를 추가할수있습니다 
// map.set(key, value)형태로 객체를 추가하게 되는데 
// a,즉 participant의 첫번째 요소부터 추가를 하게되는것이죠 처음 추가를 하게 되면 key값으로 a가 전달이 되고 value값으로 map.get(a) || 0 + 1 이 전달이 되는건데 
// a가 처음 추가되는 상황이므로 map.get(a)가 false이므로 0이 출력값이 되고 1을 더하니 결과적으로 key에 a, value에 1이 map에 저장됩니다
// 근데 만약 map에 a가 이미 추가되어있는 상황이라면(동명이인) map에 key가 a value가 1인 객체가 있는 상황입니다. 
// 그렇게 되면 map.get(a)가 true가 되므로 map.get(a) || 0)가 map.get(a)가 나오게 되고(즉 1이 나오게 됨) +1을 하면 a의 value값으로 2가 전달이 되는것이죠 
// 이제 b를 살펴보면 같은 원리로 b가 이미 map에 있다면 (즉 완주자라면)a 1 인 상태에서 -1이 되어 value값이 0이 됩니다 반대로 없는 경우에는(즉 완주를 못함) a에서는 있었으므로 value값이 1이지만 완주를 못해 b에는 없으므로 아무변화가 없어 value값이 1인상태로 남게 됩니다 
// 또한 동명이인의 경우에는 a에서 한번더 1이 더해져 value가 2인상태에서 b에서 1을 뺀다고 해도 값이 1이 남게됩니다 결국 아래 for 문에서 value값이 0이상 즉 1 인 값들(미완주자, 동명이인)이 출력이 되게 되는것이죠