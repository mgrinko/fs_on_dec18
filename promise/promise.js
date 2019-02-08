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

    behaviourFunction(
      this._resolve.bind(this),
      this._reject.bind(this)
    );
  }

  then(onSuccess, onError) {
    let myOnSuccess;

    let newPromise = new MyPromise((resolve, reject) => {
      myOnSuccess = (data) => {
        let result = onSuccess(data);
        resolve(result);
      };
    });

    switch (this._status) {
      case STATUS_PENDING:
        onSuccess && this._successCallbacks.push(myOnSuccess);
        onError && this._errorCallbacks.push(onError);
        break;

      case STATUS_FULLFILLED:
        onSuccess && myOnSuccess(this._result);
        break;

      case STATUS_REJECTED:
        onError && onError(this._result);
        break;
    }

    return newPromise;
  }

  catch(onError) {
    return this.then(null, onError);
  }

  _resolve(data) {
    if (STATUS_PENDING !== this._status) {
      return;
    }

    this._status = STATUS_FULLFILLED;
    this._result = data;

    for (let callback of this._successCallbacks) {
      callback(data);
    }
  }

  _reject(error) {
    console.log('Rejected with ' + error);

    if (STATUS_PENDING !== this._status) {
      return;
    }

    this._status = STATUS_REJECTED;
    this._result = error;

    for (let callback of this._errorCallbacks) {
      callback(error);
    }
  }
}

const promise1 = new MyPromise(
  (resolve, reject) => {
    setTimeout(() => resolve(123), 1000);
  }
);







