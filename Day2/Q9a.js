// 정규식 사용

function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

console.log(hide_numbers('01033334444')); 
console.log(hide_numbers('0211112222'));




// slice()는 '음수' 지원

function hide_numbers2(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}

console.log(hide_numbers2('01033334444'));
