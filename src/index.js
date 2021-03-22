import "./sass/main.scss";

// SLIDERS ELEMENTS
const slidesArr = document.querySelectorAll(".cards__item");

// BUTTONS
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// Transform translateX  origin
let transX = 225;

const removeClass=function(clas) {
  slidesArr.forEach(card=>card.classList.remove(clas));
}

const slide = function(pos, clas, animTime, direction) {
  if(transX===pos) {
    slidesArr.forEach(card=>card.classList.add(clas));
    setTimeout(removeClass, animTime*1000+200, clas);
    return;
  }

  direction==='left' ? transX+=112.5 : transX-=112.5;
  slidesArr.forEach(
    (card) => (card.style.transform = `translateX(${transX}%)`)
  );
}

const slideLeft = function() {
  slide(225, "endleft", 0.5,"left");
}

const slideRight = function() {
  slide(-225, "endright", 0.5,"right");
}

btnLeft.addEventListener("click", slideLeft);
btnRight.addEventListener("click", slideRight);


// MAP 

var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([51.505, -0.09]).addTo(mymap);

// BTN-HAMBURGER HEADER 
const btnHamburger = document.querySelector('.nav__btn');
const backCircle = document.querySelector('.background--circle');
const body=document.querySelector('body');
const nav=document.querySelector('.header__nav');

console.log(body);

const toggleBack=function() {
  body.classList.toggle('body--active');
  btnHamburger.classList.toggle('nav__btn--active');
  nav.classList.toggle('header__nav--active');

  const backIsDeactive=backCircle.classList.contains('btn--deactive');

  if(backIsDeactive) {
    backCircle.classList.add('btn--active');
    backCircle.classList.remove('btn--deactive');
  } else {
    backCircle.classList.remove('btn--active');
    backCircle.classList.add('btn--deactive');
  }
}

btnHamburger.addEventListener('click', toggleBack);