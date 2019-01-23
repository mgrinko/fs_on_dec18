'use strict';

let realElement = document.querySelector('#real');
let throttleElement = document.querySelector('#throttle');

function onMove(element, event) {
  console.log(event.clientX);
  element.textContent = `x: ${event.clientX}, y: ${ event.clientY }`;
}

function throttle(originalF, delay) {
  let timerId = 0;
  let isBusy = false;
  let savedThis = null;
  let savedArgs = null;


  return function wrapper(...args) {
    if (isBusy) {
      savedThis = this;
      savedArgs = args;
      return;
    }

    originalF.call(this, ...args);

    isBusy = true;

    timerId = setTimeout(() => {
      isBusy = false;

      if (savedArgs !== null) {
        wrapper.call(savedThis, ...savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
}

let wrapper = throttle(onMove, 1000);

document.addEventListener('mousemove', onMove.bind(null, realElement));
document.addEventListener('mousemove', wrapper.bind(null, throttleElement));
