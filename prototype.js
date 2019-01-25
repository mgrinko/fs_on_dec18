'use strict';

function Component({ element }) {
  this._element = element;
}

Component.prototype.hide = function() {
  console.log('GrandFather');
};



Menu.prototype.__proto__ = Component.prototype;

function Menu(...args) {
  Component.call(this, ...args)
}

Menu.prototype.hide = function () {
  console.log('Father');
  Component.prototype.hide.call(this);
};



let menu1 = new Menu();

menu1.hide();
