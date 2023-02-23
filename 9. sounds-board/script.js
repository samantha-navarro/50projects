const sounds = ['applause', 'cash', 'city', 'alien', 'email', 'ovation'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  //   adding event listener
  //   adding the sound to work
  btn.addEventListener('click', () => {
    // function to stop songs
    stopSongs();
    document.getElementById(sound).play();
  });

  // append on page
  document.getElementById('buttons').appendChild(btn);
});

// FUNCTIONS
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    // allows button to stop playing once another button is pressed
    song.pause();
    song.currentTime = 0;
  });
}
