const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const len = list.length;
const deg = 360 / len;
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');
let num = 0;
let active = 0;

//패널의 갯수에 따라 반복을 돌며 회전값 적용해서 초기모양 설정
for(let i=0; i<len; i++) {
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
}

//이전버튼 클릭시
prev.addEventListener('click', ()=>{
    frame.style.transform=`rotate(${deg* ++num}deg)`;

    (active == 0) ? active=len-1 : active--;
    activation(active, list);
})

//다음버튼 클릭시
next.addEventListener('click', ()=>{
    frame.style.transform=`rotate(${deg* --num}deg)`;
    (active == len-1) ? active=0 : active++;
    activation(active, list);
})

//활성화 함수 정의
function activation(index, arr){
    for(let el of arr){
        el.classList.remove('on');
    }
    arr[index].classList.add('on');
}


