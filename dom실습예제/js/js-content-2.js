/* const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");
const pfImage = document.querySelector("#profile img");

title.onclick = () => title.innerText = "프로필";    
userName.onclick = () => userName.innerHTML = `이름 : <b>민들레</b>`;
pfImage.onclick = () => pfImage.src = "images/pf2.png";
 */

/*
click 이벤트 발생
웹요소를 가져와서 변수 할당
변수.onClink = 함수
*/

const title = document.querySelector("#title");
const pfImg = document.querySelector("#profile img");

title.onclick = () => {
    title.innerText ="프로필";     
}
pfImg.onclick = () => pfImg.src = "images/pf2.png";