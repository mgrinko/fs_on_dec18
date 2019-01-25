'use strict';


class Component2 {
  constructor({ element }) {
    this._element = element;
    this._id = Math.random();
  }

  show() {
    this._element.hidden = false;
  }

  hide() {
    this._element.hidden = true;
  }
}

class Menu2 extends Component2 {
  constructor({ element, title, items }) {
    super({ element });

    this._title = title;
    this._items = items;

    this._render();
  }

  hide() {
    console.log(this._title + ' is hidden');
    super.hide();
  }

  _render() {
    this._element.innerHTML = `
      <h2 class="menu__title">${ this._title }</h2>
      <ul class="menu__items-list">
        ${ this._items.map(item => `
  
          <li class="menu__item">${ item }</li>
  
        `).join('') }
      </ul>
    `;
  }

  toggle() {
    this._element.classList.toggle('menu--closed');
  }
}




// ---------------------------------------------

function Component({ element }) {
  this._element = element;
  this._id = Math.random();
}

Component.prototype.show = function () {
  this._element.hidden = false;
};

Component.prototype.hide = function () {
  this._element.hidden = true;
};

// ---------------------------------------------

function Menu({ element, title, items }) {
  Component.call(this, { element });

  this._title = title;
  this._items = items;

  this._render();
}

Menu.prototype.__proto__ = Component.prototype;

Menu.prototype.hide = function () {
  console.log(this._title + ' is hidden');
  Component.prototype.hide.call(this);
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

Menu.prototype.toggle = function () {
  this._element.classList.toggle('menu--closed');
};

let menu1 = new Menu({
  element: document.querySelector('#menu1'),
  title: 'My 123',
  items: [1, 2, 3]
});

menu1.hide();
