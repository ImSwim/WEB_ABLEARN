//객체
const actor = {name : '김수현', age : '36'}

// 속성 불러오는 법
console.log(actor.name === actor['name'])
// 속성 추가하는 법
actor.genter = 'male';
actor['haircolor'] = 'brown';

delete actor.haircolor
console.log(actor)

function User(name, age){
    this.name = name;
    this.age = age;
    this.introduce = function(){
        console.log(`안녕하세요. 배우 ${name}입니다. 올해로 ${age}입니다.`)
    }
}

const user1 = new User('서강준','32');
const user2 = new User('이병헌','48');
const user3 = new User('공유','47');

console.log(user1, user2, user3)

//조건문 객체 생성
function isAdult(user){
if(!('age' in user) || user.age <= 20){
    return false;
} else {
    return true;}}

const Mark = {
    name : 'Mark',
    age: '30'
}

console.log(isAdult(Mark));