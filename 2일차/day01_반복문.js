// for, while, do while

// for(초기값; 조건; 증가식){실행문}

for(let i=0; i<10; i++){
    console.log(i);
}

//while(조건){반복할 실행문}
const i = 0;
while(i<10){
    console.log(i);
    i++;
}
//do while(조건){반복할 실행문}
i = 10
do(i){
    console.log(i);
    i--;
}while(i>0)
// break, continue

// switch문 >> 모든 case를 훑으므로 중간 case는 훑은 후 break필수
orderday = '토요일'
switch(orderday){
    case '국경일':
        console.log("할인율이 10%입니다.");
    case '평일':
        console.log("할인율이 적용되지 않습니다.");
        break;
    case '토요일':
    case '일요일':
        console.log("주말 할인 20%입니다.");
        break;
    default:
        console.log("평일요금과 같이 적용됩니다.");
}





//-----------------------------------

const bookList = ['book1','book2','book3','book4']
console.log(bookList)

for(let i=0; i<bookList.length; i++){
    console.log(`책: ${bookList[i]}`)
}

bts = ['김석진','김남준','민윤기','정호석','김태형','박지민','전정국']

for (let i=0; i<bts.length; i++){
    console.log(`${bts[i]} 멋지다 ~! `);
}

for(let i=1; i<4; i++){
    for(let j=1; j<4; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
    console.log('-----------------')
}