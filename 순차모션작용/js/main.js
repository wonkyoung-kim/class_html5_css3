/*
window.onload = () => { //브라우저를 온로드되면
    const section = document.querySelector('section');
    section.classList.add("on") // section태그에 넣고싶은 클래스 명을 입력.
}
*/

//section요소를 querySelector문으로 찾아서 다시 변수 section에 저장
const section = document.querySelector('section');
//변수 section에 클릭이벤트가 발생하면
section.onclick = e => {
    //해당 이벤트 발생한 요소를 e.currentTarget으로 찾아서
    //classList.add('on')으로 on클래스를 추가
    e.currentTarget.classList.add('on');
}