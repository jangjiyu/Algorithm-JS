function solution(arr1, arr2, signs) {
  let result = [];
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
  }
  for (let s = 0; s < signs.length; s++) {
    let TorF = [];
    for (let b = 0; b < signs[s].length; b++) {
      signs[s][b] === true
        ? TorF.push(result[s][b])
        : TorF.push(result[s][b] * -1);
    }
    answer.push(TorF);
  }
  return answer;
}

function solution2(arr1, arr2, signs) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      signs[i][j] === true
        ? sum.push(arr1[i][j] + arr2[i][j])
        : sum.push(-arr1[i][j] - arr2[i][j]);
    }
    answer.push(sum);
  }
  return answer;
}

// map()
function solution3(arr1, arr2, signs) {
  return arr1.map((row, i) =>
    row.map((col, j) => (signs[i][j] ? col + arr2[i][j] : -col - arr2[i][j]))
  );
}

let arr1 = [
  [5, 7, 1],
  [2, 3, 5],
];
let arr2 = [
  [5, 1, 6],
  [7, 5, 6],
];
let signs = [
  [true, true, false],
  [false, true, false],
];
console.log(solution(arr1, arr2, signs));
console.log(solution2(arr1, arr2, signs));
console.log(solution3(arr1, arr2, signs));
