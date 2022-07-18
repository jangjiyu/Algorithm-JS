const s = "try hello world";
const s2 = "try hello  world";
const s3 = "try hello  world   JS";

function solution(s) {
  return s
    .split(" ")
    .map((x) =>
      x.split("")
        .map((y, index) => (index % 2 == 0 ? y.toUpperCase() : y.toLowerCase()))
        .join("")
    )
    .join(" ");
}


console.log(solution(s));
console.log(solution(s2));
console.log(solution(s3));