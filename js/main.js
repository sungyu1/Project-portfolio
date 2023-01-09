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

// 클릭시 원하는곳으로 이동
const naverMenu=document.querySelector('.navber__menu');
naverMenu.addEventListener('click',(event)=>{
  const target =event.target;
  const link=target.dataset.link;
  if(link==null){
    return;
  }
  console.log(event.target.dataset.link);
  const scrolTo=document.querySelector(link);
  scrolTo.scrollIntoView({behavior:'smooth'});
});