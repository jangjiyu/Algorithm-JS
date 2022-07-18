// 윤년의 경우는 1년이 366로 평년보다 1일 많고, 1일 많은 것이 2월이라 29일까지 있기 때문에 검색을 통해서 월별 일수를 찾아서 배열에 담아야했다.
// 그리고 2016년의 1월 1일의 경우 금요일이라고 했기 때문에, 인덱스가 5가 되어야해서 4를 더해주었다. 전 월의 일수를 더해주고 7로 나눈 나머지 값으로 인덱스를 구해 요일을 표시했다.

function solution(a, b) {
  // 윤년은 2월이 29일까지 있고, 1년이 366일이다.
  // 4, 100, 400으로 나누어지는 년도는 윤년이다.
  const weekToDay = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31]; 
  let day = b+4; // 1월 1일은 FRI, b가 1일 때 인덱스로는 5가 되어야한다.
  // 1월은 이전 월의 일수를 더하지 않음으로 a-1 조건으로 해야한다.
  for(let i = 0; i < a-1; ++i){
      day += leapYearMonths[i];
  }
  return weekToDay[day%7];
}

const a = 5;
const b = 24;
console.log(solution(a,b));




let solution2=(m,d)=>(new Date('2016-'+m+'-'+d)+'').split(' ')[0].toUpperCase()

const m = 5;
const d = 24;
console.log(solution2(m,d));