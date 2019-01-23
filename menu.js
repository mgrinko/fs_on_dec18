'use strict';


function Menu({ element, title = 'no Title', items }) {
  this._element = element;
  this._title = title;
  this._items = items;

  this._render();
}

Menu.prototype.open = function () {
  this._element.classList.remove('menu--closed');
};

Menu.prototype.setTitle = function (newTitle) {
  this._title = newTitle;
  this._render();
};

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


let config = {
  element: document.querySelector('#menu1'),
  title: 'Menu 1qweqweqwe',
  items: [1, 2, 3],
};

let menu1 = new Menu(config);

menu1.open();
