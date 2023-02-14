// 입력될 매개변수가 몇 개일지 알 수 없을 때
// 전개구문
function disFav(first, ...favs){
    let str = `가장 좋아하는 과일은? ${first} 이군요.`;
    console.log(first);
    console.log(...favs);
    return str
}
console.log(disFav('바나나','딸기','두리안','포도'))

//for each -> 배열 내 각각의 원소에 대해 function적용
//응용문제
// 1,2,3,4,5를 입력받아서 합을 출력하는 함수를 foreach와 매개변수를 사용하여 표현하라

add(1,2,3,4,5)
//js는 함수가 먼저 선언되지 않아도 뒤에 작성된 함수를 끌어올려서 사용 가능

function add(...numbers){
    let result = 0
    numbers.forEach((num)=>{result += num});
    console.log(result);
}

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

let user1 = new User('임수영', 21, 'html', 'css', 'python', 'js', 'php')
console.log(user1)


// arr2를 arr1 앞에 삽입
let arr1 = [1,2,3];
let arr2 = [4,5,6];
function insert(arr){
    arr2.reverse()
    arr2.forEach((item)=>{ arr1.unshift(item)});
    console.log(arr1);
}

insert(arr2)

//전개 구문으로 하는 법
arr1 = [...arr2, ...arr1]


//배열 api
const fruits = ['사과','배','귤','메론']
const result = fruits.join('|');
console.log(typeof(result));

//문자열을 배열로
const fruits2 = '사과,배,귤,메론'
const result2 = fruits2.split(',');
console.log(typeof(result2));
// 배열도 객체이다.

//배열에서 원하는 값만 가져오기
const fruits3 = ['사과','배','귤','메론'];
const result3 = fruits3.slice(1,3);
console.log(result3);
