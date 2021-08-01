const btnUp = document.querySelector('.btnUp');
const btnDown = document.querySelector('.btnDown');
const panel = document.querySelector('.panel');
const panel_li = panel.querySelectorAll('li');
const len = panel_li.length;

// btnUp클릭시
btnUp.addEventListener('click', e=>{
    e.preventDefault();

    //현재 on이 붙어있는 활성화 패널을 찾음
    let current_item = panel.querySelector('.on');
    //활성화된 패널의 순서값을 data-index속성으로 구해서 숫자로 변환
    let current_index = current_item.getAttribute('data-index');
    current_index = parseInt(current_index);

    //앞으로 활성화될 패널의 순서값이 저장될 변수
    let next_index;
    
    //현재 활성화 패널의 순번이 마지막 패널이면 값을 0으로 고정 아니면 1씩 증가
    (current_index != len) ? next_index = current_index+1 : next_index=0;

    //현재 활성화된 패널의 on을 지우고 동시에 top을 붙여서 
    //위쪽으로 날라가는 모션을 주면서 비활성화
    current_item.classList.remove('on');
    current_item.classList.add('top');

    //다음의 나올 패널을 선택해서 순간적으로 bottom클래스 적용
    panel_li[next_index].classList.add('bottom');

    //약간의 시간차를 두고
    setTimeout(()=>{
        //기존에 top을 줬던 패널의 클래스를 다시 제거해서 초기화
        panel.querySelector('.top').classList.remove('top');

        //bottom 클래스를 줬던 앞으로 활성화될 패널의 순간으로 bottom클래스지우고
        //on클래스를 붙여서 활성화
        panel_li[next_index].classList.remove('bottom');
        panel_li[next_index].classList.add('on');
    },500)
})