// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
// 제한 조건 : n과 m은 각각 1000 이하인 자연수입니다.

// nxm
// 5x3
// *****
// *****
// *****





// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     for (i = 1; i<=b; i++) {
//         console.log('*'.repeat(a))
//     }
// });


const n = 5;
const m = 3;

for (i = 1; i<=m; i++) {
    console.log('*'.repeat(n))
}