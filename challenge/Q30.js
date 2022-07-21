// 30. 최소직사각형

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]; // 4000
let sizes2 = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]; // 120

function solution(sizes) {
  let w = [];
  let h = [];
  for (size of sizes) {
    size.sort((a, b) => b - a);
    w.push(size[0] * 1);
    h.push(size[1] * 1);
  }
  let max1 = Math.max(...w);
  let max2 = Math.max(...h);
  return max1 * max2;
}

console.log(solution(sizes));
console.log(solution(sizes2));
