//함수 안에 함수를 넣는 것?


//동기 콜백
function printIm(print){
    print()
}
printIm(()=>console.log('hello'));

//비동기 콜백
printDelay(()=>console.log('async callback'),2000);
function printDelay(print,timeout){
    setTimeout(print,timeout);
}

//콜백 없이 구현 -> 지정된 시간 이후 출력-> 끝

function print(){
    console.log("안녕하세요.");
}
setTimeout(print,2000);

//setInterval -> 지정된 시간 이후 출력 루틴을 반복
//setInterval(()=>{console.log("hi")},2000)
// 일정 횟수 이후 clearInterval로 루틴 끊어냄
let counter = 0
let timer = setInterval(()=>{
    console.log("hi");
    counter++
    if(counter===5){
        clearInterval(timer);
    }
},2000)
