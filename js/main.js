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
  selectNavItem(target);
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
// 1. 모든 섹션 요소들을 가지고 오기.
const sectionIds=['#home','#about','#skills','#work','#contact'];
const sections=sectionIds.map(id=>document.querySelector(id));
const navItems=sectionIds.map(id=>document.querySelector(`[data-link="${id}"]`));
// 요소가 제대로 가지고 오는지 확인.
// console.log(sections);
// console.log(navItems);

let selectedNavIndex=0;
let selectedNavItem=navItems[0];
function selectNavItem(selected){
  selectedNavItem.classList.remove('active');
  selectedNavItem= selected;
  selectedNavItem.classList.add('active');
}

// 2.IntrsectionObserver를 이용해서 모든 섹션들을 관찰한다.
const observerOptions={
  root:null,
  rootMargin:'0px',
  threshold:0.3,
};
// 스크롤하면 나가는 About/ console.log 표시 
const observerCallback=(entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting && entry.intersectionRatio > 0){
      const index=sectionIds.indexOf(`#${entry.target.id}`);
      
      // console.log(index,entry.target.id)
      // 스크롤이 아래로 되어서 페이지가 올라옴
      if(entry.boundingClientRect.y<0){
        selectedNavIndex=index+1;
      }else{
        selectedNavIndex=index-1;
      }
    }
  });
};
const observer=new IntersectionObserver(observerCallback,observerOptions);
sections.forEach(section=>observer.observe(section));

// 3.보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
 window.addEventListener('wheel',()=>{
  if(window.scrollY===0){
    selectedNavIndex=0;
  }else if(window.scrollY + window.innerHeight === document.body.clientHeight){
    selectedNavIndex=navItems.length-1;
  }
  selectNavItem(navItems[selectedNavIndex]);
 });