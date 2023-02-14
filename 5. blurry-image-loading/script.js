// getting DOM ELEMENTS

const loadingText = document.querySelector('.loading-text');
const backgroundImage = document.querySelector('.background-image');

// start percentage at 0

let load = 0;
// need to set an interval for number to increment
let int = setInterval(blurring, 40);

// FUNCTIONS

function blurring() {
  load++;
  // console.log(load) checking if loading works

  // if statement to let interval stop at 100 and blurred with int variable
  if (load > 99) {
    clearInterval(int);
  }

  // insert functions using the dom elements
  loadingText.innerText = `${load}%`;
  // inserting for the percentage number to work adding %

  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  backgroundImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// scale function lets us take the opacity to get blurry towards the end
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
