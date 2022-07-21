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
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}

console.log(solution(sizes));
console.log(solution(sizes2));
