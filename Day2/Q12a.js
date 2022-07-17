// 등차수열? 가우스공식?
// 1 ~ x까지의 합 n * (n + 1) / 2인데 여기에 price배 만큼 곱해주는 거니까 (앞의 식) * price

function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

let price = 3;
let money = 20;
let count = 4;
console.log(solution(price, money, count));






// ..._ 는 코딩 테스트시 solution 함수에 들어오는 매개변수의 목록을 의미
// 결과적으로, 함수 몸체에서 _[0] 은 price, _[1]은 money, _[2]는 count가 됨
// Math.max 부분은 0과 우리가 계산하고자 하는 결과 둘 중에 더 큰 수를 반환하게 하여, 계산 결과가 음수인 경우, 즉 돈이 부족하지 않은 경우에는 0이 나오도록 한 것
// '++_[2]' 부분은 전위연산자로써, _[2]에 대해 먼저 +1하고 계산하는.. 즉 count+1을 의미

const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);
