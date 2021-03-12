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
