'use strict';

const STATUS_PENDING = 0;
const STATUS_FULLFILLED = 1;
const STATUS_REJECTED = 2;

class MyPromise {
  constructor(behaviourFunction) {
    this._status = STATUS_PENDING;
    this._result = null;
    this._successCallbacks = [];
    this._errorCallbacks = [];

    behaviourFunction(this._resolve.bind(this));
  }

  then(onSuccess, onError) {
    switch (this._status) {
      case STATUS_PENDING:
        onSuccess && this._successCallbacks.push(onSuccess);
        onError && this._errorCallbacks.push(onError);
        break;

      case STATUS_FULLFILLED:
        onSuccess && onSuccess(this._result);
        break;

      case STATUS_REJECTED:
        onError && onError(this._result);
        break;
    }
  }

  catch(onError) {
    return this.then(null, onError);
  }

  _resolve(data) {
    console.log('Rsolved with ' + data);

    if (STATUS_PENDING !== this._status) {
      return;
    }

    this._status = STATUS_FULLFILLED;
    this._result = data;

    for (let callback of this._successCallbacks) {
      callback(data);
    }
  }
}


const promise1 = new MyPromise(
  (resolve) => resolve(123)
);

promise1.then(
  (data) => console.log('1', data),
  (error) => console.warn('Error 1', error),
);

promise1.catch(
  (error) => console.warn('Error 2', error),
);

promise1.then((data) => console.log('2', data));


setTimeout(() => {
  promise1.then((data) => console.log('3', data));

  promise1._resolve(456);

  promise1.then((data) => console.log('4', data));
}, 5000);

