const swiper = new Swiper('#wrap', {
    slidesPerView: "3", //한 화면에 보일 슬라이드 갯수
    loop: true, //슬라이드를 무한 순환
    spaceBetween: 0, //슬라이드 사이 간격
    centeredSlides: true, //슬라이드 가운데 정렬
    speed: 1000, //슬라이드 이동 속도
    grabCursor: true, //커서 모양 변경
    navigation: {
        prevEl: ".swiper-button-prev", //이전버튼 등록
        nextEl: ".swiper-button-next" //다음버튼 등록
    },
    pagination: {
        el: ".swiper-pagination", //페이징메뉴 추가
        type: "fraction", //숫자로 보이게
        clickable: true, //클릭기능 추가
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50, //y축 회전각도
        slideShadows: false, //슬라이드 좌우 그림자 유무
        depth: 400, //원근감 깊이정도
        stretch: -100, //양수면 당겨지고, 음수면 벌어짐
    }
});