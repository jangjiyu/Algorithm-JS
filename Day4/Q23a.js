const n = 12345;

function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}

console.log(solution(n));






function solution2(n) {
  // var arr = [];
  // for (var i=0; i<n.length; i++) {
  //     arr.push(n[i]);
  //     console.log(n[i]);
  // }
  // console.log(arr);
  // console.log('---------')
  // return n.toString().split('').sort((a, b) => b > a).map(o => o = parseInt(o));
  return n.toString().split('').reverse().map(o => o = parseInt(o));
}

console.log(solution2(n));
