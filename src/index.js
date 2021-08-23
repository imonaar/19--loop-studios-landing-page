import "./styles/styles.scss";

console.log("hello world!");

const header = document.querySelector('.js-nav-links')
const menuBtn = document.querySelector('.js-menu-btn')

menuBtn.addEventListener('click', ()=>{
    header.classList.toggle('visible')
    menuBtn.classList.toggle('close')
})