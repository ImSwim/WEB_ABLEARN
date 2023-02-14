/* if(조건식){
    True일 경우 실행문
}else{
    False일 경우 실행문
} */

function grade(score){
    if(score>=40){
        return "통과하셨습니다."
    }else{
        return "탈락입니다."
    }
}

console.log(grade(45))

/*
let userInput = prompt('이름을 입력하세요.');
if (userInput === null){
    alert('왜 취소하세요?');
}else if(userInput === ''){
    alert(`왜 아무것도 안입력하세요?`);
}else{
    alert(`유저명 ${userInput} 입력되었습니다.`);
}
*/

let userGrade = prompt("점수를 입력하세요.")
userGrade = parseInt(userGrade)
if (userGrade === null){
    alert('왜 취소하세요?');
}else if(userGrade === ''){
    alert(`왜 아무것도 안입력하세요?`);
}else{
    if(userGrade >= 90 && userGrade <= 100){
        alert(`당신의 등급은 A입니다.`);
    }else if(userGrade >= 80 && userGrade < 90){
        alert(`당신의 등급은 B입니다.`);    
    }else if(userGrade >= 0 && userGrade < 80){
        alert(`당신의 등급은 C입니다.`);
    }else{
        alert(`0~100 사이의 숫자만 입력하라니까요?`);
    }
}   