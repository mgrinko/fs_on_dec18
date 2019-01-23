'use strict';

const input = document.querySelector('input');


function onChange(event) {
  console.log(this, event.target.value)
}

function debounce(originalF, delay) {
  let timerId = 0;

  return function wrapper(...args) {
    clearTimeout(timerId);

    timerId = setTimeout(
      originalF.bind(this, ...args),
      delay
    );
  };
}

let wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);
