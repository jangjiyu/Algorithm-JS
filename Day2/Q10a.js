function solution(arr1, arr2) {
  var answer = [[]];
  for (var i=0; i<arr1.length; i++){
      answer[i] =[];
      for(var j=0; j<arr1[i].length; j++){
          answer[i].push(arr1[i][j] + arr2[i][j]);
      }
  }
  return answer;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))


function sumMatrix(A,B){
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

console.log(sumMatrix([[1,2],[2,3]], [[3,4],[5,6]])) 
console.log(sumMatrix([[1],[2]], [[3],[5]])) 
