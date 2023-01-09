'use strict'

// navbar 를 아래로 내리면 navbar이 나오기
const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
})

// navbar menu클릭시 원하는 곳으로 이동
const naverMenu=document.querySelector('.navber__menu');
naverMenu.addEventListener('click',(event)=>{
  const target =event.target;
  const link=target.dataset.link;
  if(link==null){
    return;
  }
  scrollIntoView(link);
});

// Contact 클릭시 원하는 곳으로 이동
const homeContact=document.querySelector('.home__contact');
homeContact.addEventListener('click',()=>{
  scrollIntoView('#contact');
})


// 스크롤을 내리면 페이지가 투명하게 만들기
const navbarscroll=document.querySelector('#navbar')

const home=document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity=1-window.scrollY/homeHeight;

});




function scrollIntoView(selector){
  const scrolTo=document.querySelector(selector);
  scrolTo.scrollIntoView({behavior:'smooth'});
}