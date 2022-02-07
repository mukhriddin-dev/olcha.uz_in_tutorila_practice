const btnSp = document.querySelector('.btn-sp'),
  hide = document.querySelector('.hide'),
  tabContainer = document.querySelector('.tabs-container'),
  tabSidebar = document.querySelector('.tab-sidebar'),

  tabContacts = document.querySelector('.tab-contact'),
  call = document.querySelector('.call'),
  tabX = document.querySelector('.back-x'); 
  

btnSp.addEventListener('click', () => {
  tabContainer.classList.toggle('tab-swiper');
  tabSidebar.classList.toggle('tab-swiper');
})


hide.addEventListener('click', () => {
  tabContainer.classList.toggle('tab-swiper');
  tabSidebar.classList.toggle('tab-swiper');
})

// tab contact uchun kod


call.addEventListener('click', () => {
  tabContacts.classList.toggle('hide_update');
})

tabX.addEventListener('click', () => {
  tabContacts.classList.toggle('hide_update');
})

// scroll events

const navbarB= document.querySelector('.navbar-bottom'),
      navbarT=document.querySelector('.navbar-top');





window.addEventListener('scroll', () => {

  let top=Math.floor(window.scrollY);

if(top>300){
  navbarB.style.position="fixed";
  navbarB.style.top="0px";
  navbarB.style.background="black";
  navbarB.style.color="crimson";
}

if(top===0){
  navbarB.style.position="relative";
  navbarB.style.background="linear-gradient(0deg, rgb(250, 88, 33) 14%, rgb(179, 0, 161) 100%)";
}
  
})