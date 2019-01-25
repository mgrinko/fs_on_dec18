'use strict';

function Component({ element }) {
  this._element = element;
}

Component.prototype.show = function () {
  this._element.hidden = false;
};

Component.prototype.hide = function () {
  this._element.hidden = true;
};



function Menu({ element, title, items }) {
  this._element = element;
  this._title = title;
  this._items = items;

  this._render();
}

Menu.prototype.__proto__ = Component.prototype;
Menu.prototype = { __proto__: Component.prototype };
Menu.prototype = Object.create(Component.prototype);

Menu.prototype._render = function() {
  this._element.innerHTML = `
    <h2 class="menu__title">${ this._title }</h2>
    <ul class="menu__items-list">
      ${ this._items.map(item => `

        <li class="menu__item">${ item }</li>

      `).join('') }
    </ul>
  `;
};

Menu.prototype.toggle = function () {
  this._element.classList.toggle('menu--closed');
};

let menu1 = new Menu({
  element: document.querySelector('#menu1'),
  title: 'My 123',
  items: [1, 2, 3]
});

let menu2 = new Menu({
  element: document.querySelector('#menu2'),
  title: 'My sdhfgjdsgfhdf',
  items: [1, 2, 3, 5, 6]
});

console.log(menu1);

setTimeout(() => {
  menu1.hide()
}, 1000);
