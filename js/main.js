'use strict'

// navbar 를 아래로 내리면 투명하게 만들기
const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
})