import "./styles/styles.scss";

console.log("hello world!");

const navLinks = document.querySelector('.js-nav-links')
const menuBtn = document.querySelector('.js-menu-btn')

menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('visible')
    menuBtn.classList.toggle('close')
})