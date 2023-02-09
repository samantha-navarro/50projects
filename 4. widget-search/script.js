// get all the class names to create the toggle effect on the transitions

const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const title = document.querySelector('.title');

// btn needs an event listener when clicked

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
    title.classList.toggle('active');
})
