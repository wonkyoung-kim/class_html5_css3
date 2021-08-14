const btns = document.querySelectorAll('.list li');
const title = document.querySelectorAll('.title li');
const pic = document.querySelectorAll('.pic li');

//클릭한 버튼의 인덱스 값 구하기
btns.forEach((el, index)=>{
    el.addEventListener('click', e=>{
        activation(btns, index);
        activation(title, index);
        activation(pic, index);
    })
})

//마우스좌표값을 이용해 이미지 움직이기
window.addEventListener('mousemove', e=>{
    const img = document.querySelector('.pic li.on img');
    const deco2 = document.querySelector('.deco2');
    const deco3 = document.querySelector('.deco3');

    moveImg(img, e, 15, false);
    moveImg(deco2, e, 40, true);
    moveImg(deco3, e, 30, true);
})

function moveImg(el, event, gravity, reverse){
    let x, y;
    if(reverse){
        x = -event.pageX;
        y = -event.pageY;
    } else {
        x = event.pageX;
        y = event.pageY;
    }
    
    el.style.transform = `translate(${x/gravity}px, ${y/gravity}px)`;

}

//인덱스값구하는 공통 함수
function activation(arr, index){
    for(let el of arr) {
        el.classList.remove('on');
    }
    arr[index].classList.add('on');
}