// DOM ELEMENTS

const boxes = document.querySelectorAll('.box');

// add an event listener to the scroll
window.addEventListener('scroll', checkBoxes);

checkBoxes();
// need to call it for the function to work

// FUNCTION
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  // iterate the boxes
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
