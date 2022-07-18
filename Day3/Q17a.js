// 정규식 사용
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

console.log( alpha_string46("a234") );
console.log( alpha_string46("1e22") );
console.log( alpha_string46("1224") );




// 오직 for & if
function alpha_string46_2(s){
  var result = false
  // 함수를 완성하세요
  if(s > 999){
    if(s <10000){
      result = true
    }else if(s > 99999){
      if(s < 1000000){
        result = true
      }else{
        result = false
      }
    }
  }

  return result;
}

console.log( alpha_string46_2("a234") );
console.log( alpha_string46_2("1e22") );
console.log( alpha_string46_2("1224") );