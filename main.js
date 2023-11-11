
let menuIcon = document.querySelector('.header_menu');

let closeIcon = document.querySelector('.header_close_menu');
let navbar= document.querySelector('.header_navbar');
let main= document.querySelector('.main');
let header = document.querySelector('.header');

let body = document.body;
// onclick-- to open 
menuIcon.onclick = () =>{
  navbar.classList.add("active");
  header.classList.add("active");
  main.style.opacity=0.3;   
  body.classList.add("active");
};
// onclick-- to close 
closeIcon.onclick = () =>{
  navbar.classList.remove("active");
  header.classList.remove("active"); 
  main.style.opacity = 1;
  body.classList.remove("active");
};
