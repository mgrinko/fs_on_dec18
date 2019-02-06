'use strict';

// class MyPromise {
//   constructor() {
//
//   }
// }
//
//
// const promise1 = new MyPromise((resolve, reject) => {
//
// });

const STATUS_PENDING = 0;
const STATUS_FULLFILLED = 1;
const STATUS_REJECTED = 2;

const promise2 = {
  status: STATUS_PENDING,
  result: null,
  successCallbacks: [],

  then(callback) {
    if (STATUS_PENDING === this.status) {
      this.successCallbacks.push(callback);

    } else if (STATUS_FULLFILLED === this.status) {
      callback(this.result)
    } else {

    }
  },

  resolve(data) {
    this.status = STATUS_FULLFILLED;
    this.result = data;

    for (let callback of this.successCallbacks) {
      callback(data)
    }
  }
};


promise2.then((data) => console.log('1', data));
promise2.then((data) => console.log('2', data));

promise2.resolve(123);

promise2.then((data) => console.log('3', data));

