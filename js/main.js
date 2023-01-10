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
const navbarMenu=document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
  const target =event.target;
  const link=target.dataset.link;
  if(link==null){
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// navbar toggle 버튼 클릭시 메뉴보이기
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
  navbarMenu.classList.toggle('open'); 
});


// Contact 클릭시 원하는 곳으로 이동
const homeContactBtn=document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
  scrollIntoView('#contact');
});


// 스크롤을 내리면  home contact투명하게 만들기
const navbarscroll=document.querySelector('#navbar')

const home=document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity=1-window.scrollY/homeHeight;

});

// 스크롤시 aroow-up 버튼 생성
const arrowUp=document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
  if(window.scrollY>homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');

  }
});

// arrow-up 버튼 클릭시 home 으로 이동
arrowUp.addEventListener('click',()=>{
  scrollIntoView('#home');
});

// 프로젝트 이동
const workBtnContainer = document.querySelector('.work__categories')
const projectCintainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')
workBtnContainer.addEventListener('click',(e)=>{
  const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter==null){
    return;
  }

  // 이전 항목에서 선택 항목을 제거하고 새로운 항목을 선택
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');





  projectCintainer.classList.add('anim-out');
  setTimeout(()=>{
    projects.forEach((project)=>{
      console.log(project.dataset.type);
      if(filter==='*'|| filter===project.dataset.type){
        project.classList.remove('invisible')
      }else{
        project.classList.add('invisible')
      }
    });
    projectCintainer.classList.remove('anim-out');
  },300);
});


function scrollIntoView(selector){
  const scrolTo=document.querySelector(selector);
  scrolTo.scrollIntoView({behavior:'smooth'});
}