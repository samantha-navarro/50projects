const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // e.preventDefault()
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y) - will show the math where you clicked in the button

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // span
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    // remember using (this) will only go through with a function declaration and not an arrow function
    this.appendChild(circle);

    // the second argument is the time we want to wait
    // check in console when clicking the button it will keep creating an added circle click. To stop that from happening, we create the setTimeout to remove it - double check work in console to see if working
    setTimeout(() => circle.remove(), 500);
  });
});

// rule of thumb with Vanilla JavaScript. When you add something to the DOM it will continue to input, so one must remove it from the DOM as well.
