'use strict';

User.prototype = {
  sayHi() {

  }
};


let user = new User();


let user1 = {
  name: 'Misha',
  __proto__: User.prototype,
};

user1.sayHi();



class User {
  constructor() {

  }

  sayHi() {

  }
}
