'use strict';

function getUserData(user) {
  let url = this.apiUrl + user.id;

  console.log('Getting user from ' + url);

  return user.id + Math.random();
}


function makeCaching(originalF) {
  let cache = new Map();

  return function wrapper(x) {
    if (!cache.has(x)) {
      cache.set(x, originalF.call(this, x));
    }

    return cache.get(x);
  };
}


let userService = {
  apiUrl: 'http://localhost:3000/api/users/',
  getById: makeCaching(getUserData),
};


let user1 = { id: 1 };
let user2 = { id: 2 };
let user3 = { id: 3 };

console.log(
  userService.getById(user1)
);

console.log(
  userService.getById(user2)
);

console.log(
  userService.getById(user1)
);

console.log(
  userService.getById(user3)
);

console.log(
  userService.getById(user2)
);

