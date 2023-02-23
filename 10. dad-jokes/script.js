// using async and await for fetch = cleaner

const jokeElement = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn');

generateJoke();

// EVENT LISTENER
jokebtn.addEventListener('click', generateJoke);

// FUNCTION

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeElement.innerHTML = data.joke;
    });
}

// CLEANER CODE using async and await with fetch

// async function generateJoke() {
//     const config = {
//       headers: {
//         Accept: 'application/json',
//       },
//     };

//     const res = await fetch('https://icanhazdadjoke.com', config)

//     const data = await res.json()

//     jokeElement.innerHTML = data.joke
//   }
