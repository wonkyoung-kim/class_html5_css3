import {animate} from "./animate.mjs";

const sec = document.querySelectorAll('section');
const btn = document.querySelectorAll('ul li');
let sec_arr = [];

sec.forEach(el=>{
    sec_arr.push(el.offsetTop);
});

btn.forEach((el, index)=>{
    el.addEventListener('click', e=>{
        animate(window, {
            prop: 'scroll',
            value: sec_arr[index],
            duration: 500
        });
    })
})