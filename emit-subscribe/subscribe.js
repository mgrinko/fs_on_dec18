'use strict';

let eventClick = { type: 'click' };
let eventMousedown = { type: 'mousedown' };

let button = {
  _callbacks: {},

  addEventListener(eventName, callback) {
    if (!this._callbacks.hasOwnProperty(eventName)) {
      this._callbacks[eventName] = [];
    }

    this._callbacks[eventName].push(callback);
  },

  removeEventListener(eventName, callbackToRemove) {
    let callbacks = this._callbacks[eventName];

    if (!callbacks) {
      return;
    }

    this._callbacks[eventName] = callbacks
      .filter(callback => callback !== callbackToRemove)
  },

  dispatchEvent(eventName, event) {
    let callbacks = this._callbacks[eventName];

    if (!callbacks) {
      return;
    }

    callbacks.forEach(callback => {
      callback(event);
    });
  },
};


let callback = function(event) {
  console.log(999);
};

button.addEventListener('click', callback);
button.addEventListener('click', () => { console.log(123);});

button.removeEventListener('click', callback);


button.dispatchEvent('click', eventClick);



// button.onclick = function(event) {
//   console.log(event.type);
// };
//
// button.onclick(event1);
// button.onclick(event1);
