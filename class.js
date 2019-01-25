'use strict';

class Component {
  constructor({ element }) {
    this._element = element;
  }

  hide() {
    console.log('GrandFather');
  }
}

class Menu extends Component {
  constructor(...args) {
    super(...args);
  }

  hide() {
    console.log('Father');
    super.hide();
  }
}




