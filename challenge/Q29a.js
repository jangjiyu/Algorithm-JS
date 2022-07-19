function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

const solution2 = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
