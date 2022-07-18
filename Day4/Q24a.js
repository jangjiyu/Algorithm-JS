const n = 118372;

function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}

console.log(solution(n));




function solution2(n) {
  //숫자가 분명히 더 빠름
  var nums =[];
  do{
      nums.push(n%10);
      n=Math.floor(n/10);
  } while(n>0)

  return nums.sort((a,b)=>b-a).join('')*1;
  //문자는 느림
  // return (n+"").split('').sort((a,b)=>b-a).join('')*1;
}

console.log(solution2(n));
