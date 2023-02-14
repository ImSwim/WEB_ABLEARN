'use strict'

const arr1 = new Array();
// 마치 const a; 처럼 객체를 선언만 해서 방만 만들어놓은 느낌
const fruits = ['수박','딸기','감'];

for(let fruit of fruits){
    console.log(fruit)
}

fruits.pop();
console.log(fruits)
fruits.push('감');
console.log(fruits)
fruits.unshift('감')
console.log(fruits)
fruits.shift('감')
console.log(fruits) // shift는 앞에서 넣으면 하나씩 밀려서 속도 느려짐

const fruit = ['멜론','두리안']
const newfruits = fruits.concat(fruit);
console.log(newfruits)

// for each, for in 도 있고 반복문 종류 많음