// DOM ELEMENTS

const body = document.body;
const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');

// test with different numbers for background check
let activeSlide = 0;

// able to go right with right arrow function - increment
right.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

// able to go backwards with left arrow function - decrement
left.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
}
