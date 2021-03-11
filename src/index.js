import "./sass/main.scss";

// SLIDERS ELEMENTS
const slidesArr = document.querySelectorAll(".cards__item");

// BUTTONS
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

// Transform translateX  origin
let transX = 225;

const slideLeft = function () {
  transX = 225
    ? slidesArr.forEach((card) => {
        card.classList.add("end", "endleft");
      })
    : slidesArr.forEach((card) => {
        card.classList.remove("end", "endleft");
      });
  transX += 112.5;
  slidesArr.forEach(
    (card) => (card.style.transform = `translateX(${transX}%)`)
  );
};

const slideRight = function () {
  transX = -225
    ? slidesArr.forEach((card) => {
        card.classList.add("end", "endright");
      })
    : slidesArr.forEach((card) => {
        card.classList.remove("end", "endright");
      });
  transX -= 112.5;
  slidesArr.forEach(
    (card) => (card.style.transform = `translateX(${transX}%)`)
  );
};

btnLeft.addEventListener("click", slideLeft);
btnRight.addEventListener("click", slideRight);
