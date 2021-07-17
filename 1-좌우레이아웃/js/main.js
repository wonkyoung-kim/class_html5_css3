/*	
	//박스 초기화 레이아웃 구문
	const grid = new Isotope("section", { 
		itemSelector: "article", 
		columnWidth: "article", 
		transitionDuration: "0.5s" 
	});	

	//박스 정렬 구문
	grid.arrange({ filter : ".item" });
*/

/* 
	load이벤트를 걸기전에 UI를 보면
	살짝 레이아웃이 겹치게 보이는 현상이 나타나는데
	DOM(html, css)이 다 load됨에도 불구하고
	그 안에 img요소나 소스가 있을 경우
	다 불러오지 못했을 때 생기는 문제점들이다.
	그래서 밑에 load이벤트를 걸어서 
	브라우저가 다 load되면 이러한 겹치는 문제점을 
	해결해주는 이벤트이다.
*/

//----- 요즘 추세 방식
window.addEventListener("load", ()=>{
	//로딩시 isotope정렬기능 호출
	const grid = new Isotope("section", { 
		itemSelector: "article", 
		columnWidth: "article", 
		transitionDuration: "0.5s" 
	});	

	const btns = document.querySelectorAll('main ul li');
	const len = btns.length;


	//len의 갯수만큼 내부코드 반복
	for(let i=0; i<len; i++) {
		//각 버튼 클릭시
		btns[i].addEventListener('click', e=>{
			e.preventDefault();
			
			//모든 버튼을 반복 돌면서 클래스 제거
			for(let k=0; k<len; k++){
				btns[k].classList.remove('on');
			}

			//내가 클릭한 버튼만 다시 on클래스 추가
			e.currentTarget.classList.add('on');

			//변수 sort에 내가 클릭한 버튼의 자식인 a태그의 'href'속성값을 저장
			const sort = e.currentTarget.querySelector('a').getAttribute('href');

			//저장된 값을 다시 정렬구문의 옵션값으로 지정
			grid.arrange({ filter : sort });
		})
	}
});



//----- 옛날 방식
// window.onload = () => {
// 	//로딩시 isotope정렬기능 호출
// 	const grid = new Isotope("section", { 
// 		itemSelector: "article", 
// 		columnWidth: "article", 
// 		transitionDuration: "0.5s" 
// 	});	
// }
