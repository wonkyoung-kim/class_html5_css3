import {animate} from "./animate.mjs";

const sec = document.querySelectorAll('section');
const btn = document.querySelectorAll('ul li');
let sec_arr = [];

//section의 갯수만큼 반복을 돌면서 배열에 세로 위치값 저장
sec.forEach(el=>{
    sec_arr.push(el.offsetTop);
});
//버튼의 갯수만큼 반복을 돌면서 클릭이벤트 연결하고 animate함수 호출
btn.forEach((el, index)=>{
    el.addEventListener('click', e=>{
        animate(window, {
            prop: 'scroll',
            value: sec_arr[index],
            duration: 500
        });
    })
})

//스크롤 이벤트 발생시 스크롤 거리값과 각 섹션의 위치값을 비교해서 버튼활성화
window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY || window.pageYOffset;
    
    sec_arr.forEach((el, index)=>{
        if(scroll >= el){
            activation(btn, index);
            activation(sec, index);
        }
    })
});

function activation(arr, index){
    for(let el of arr){
        el.classList.remove('on');
    }
    arr[index].classList.add('on');
}