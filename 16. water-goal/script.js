// DOM ELEMENTS - id and querySelectorAll
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  // console.log(idx);
  cup.addEventListener('click', () => {
    highlightCups(idx);
  });
});

//  FUNCTIONS

function highlightCups(idx) {
  // once you double click on a cup it will either fill or remove
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }
  // console.log(idx);
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  //   function
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  // in console, it should show 8
  const totalCups = smallCups.length;
  // will check the cups when clicked
  // console.log(fullCups);

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  // dealing with remained and removing it
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    // show remained liters
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}L`;
  }
}
