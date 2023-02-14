// use strict <= ES6 버전이 아닌 문법을 사용할 경우 더 민감하게 오류를 출력

// alert("접속을 확인합니다.")  
//let a = 10.8; // 변할 수 있는 변수의 자료형 선언 let
//var c = 7; // 변할 수 있지만 변수의 자료형이지만 let과는 구분되는 자료형 
// const b = "출력하였습니다."; // 변하지 않는 변수의 자료형 선언 const
// 변수 선언 후 사용할 떄는 상수/변수 구분이 안되므로 상수명 앞에 $를 붙이는 등 이름 붙이는 규칙을 더함

//alert(b);

//console.log(a);
//console.log(typeof(a)); //웹페이지 콘솔창에서 변수타입이 출력되는 함수

let myNumber1 = 10;
let myNumber2 = 20;

function sum(a,b){
    result = a + b;
    console.log(`함수실행결과: ${result}`);
}
//즉시함수실행
(function(a,b){
    result = a + b;
    console.log(`함수실행결과: ${result}`);
}(myNumber1, myNumber2))


function buyBook(name){
    const msg = `구매한 목록은 : ${name}입니다.`;
    console.log(msg)
}

const name1 = '홍길동';
const name2 = `홍길동`;

console.log(typeof(name1),typeof(name2))

console.log(
    String(100),
    String(true),
    String(null),
    String(undefined)
)

console.log(
    Number('100'),
    Number(true),
    Number(null),
    Number(undefined)
)

console.log(
    Boolean('100'),
    Boolean(''),
    Boolean(100),
    Boolean(0),
    Boolean(0.0),
    Boolean(null),
    Boolean(NaN),
    Boolean(undefined)
)

function add1(a,b){
    result = a + b;
    return `문제1 : ${result}`;
}

const a = 100
const b = 50
function add2(){
    const result = a + b;
    return `문제2 : ${result}`;
}

console.log(add1(250,250))
console.log(add2())

let sum = (a, b) => {
    result = a + b
    return result
}