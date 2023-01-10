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


// 스크롤을 내리면  home contact투명하게 만들기
const navbarscroll=document.querySelector('#navbar')

const home=document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity=1-window.scrollY/homeHeight;

});

// aroow-up 스클롤 버튼 클릭시 위로 이동
const arrowUp=document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
  if(window.scrollY>homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');

  }
});

// 클릭시 위로이동
arrowUp.addEventListener('click',()=>{
  scrollIntoView('#home');
});


function scrollIntoView(selector){
  const scrolTo=document.querySelector(selector);
  scrolTo.scrollIntoView({behavior:'smooth'});
}