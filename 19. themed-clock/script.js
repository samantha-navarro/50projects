const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// toggles button
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light Mode';
  }
});

// FUNCTION

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hourForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  //   this checks the hours
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // needs to be dynamic
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  //   allows us to show 0 in 05 minutes by using a ternary
  timeEl.innerHTML = `${hourForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;

  console.log(time);
}

// mapping a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
// want to call it every second - 1000
setInterval(setTime, 1000);
