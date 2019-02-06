'use strict';

const STATUS_PENDING = 0;
const STATUS_FULLFILLED = 1;
const STATUS_REJECTED = 2;

class MyPromise {
  constructor() {
    this.status = STATUS_PENDING;
    this.result = null;
    this.successCallbacks = [];
  }

  then(callback) {
    if (STATUS_PENDING === this.status) {
      this.successCallbacks.push(callback);

    } else if (STATUS_FULLFILLED === this.status) {
      callback(this.result)
    } else {

    }
  }

  resolve(data) {
    console.log('Rsolved with ' + data);

    if (STATUS_PENDING !== this.status) {
      return;
    }

    this.status = STATUS_FULLFILLED;
    this.result = data;

    for (let callback of this.successCallbacks) {
      callback(data);
    }
  }
}


const promise1 = new MyPromise();

promise1.then((data) => console.log('1', data));
promise1.then((data) => console.log('2', data));

promise1.resolve(123);


setTimeout(() => {
  promise1.then((data) => console.log('3', data));

  promise1.resolve(456);
}, 3000);

