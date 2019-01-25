'use strict';


function Menu({ element, title, items }) {
  this._element = element;
  this._title = title;
  this._items = items;

  this._render();
}

Menu.prototype._render = function() {
  this._element.innerHTML = `
    <h2 class="menu__title">${ this._title }</h2>
    <ul class="menu__items-list">
      ${ this._items.map(item => `

        <li class="menu__item">111</li>

      `).join('') }
    </ul>
  `;
};

Menu.prototype.toggle = function () {
  this._element.classList.toggle('menu--closed');
};


let config = {
  element: document.querySelector('#menu1'),
  title: 'My 123',
  items: [1, 2, 3]
};

let menu1 = new Menu(config);

setTimeout(() => {
  menu1.toggle();
}, 1000);

setTimeout(() => {
  menu1.toggle();
}, 2000);

setTimeout(() => {
  menu1.toggle();
}, 3000);

setTimeout(() => {
  menu1.toggle();
}, 4000);

setTimeout(() => {
  menu1.toggle();
}, 5000);
