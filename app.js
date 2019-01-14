'use strict';

function initializeMenu(element) {
  let textField = element.querySelector('.menu__new-item-text');
  let addButton = element.querySelector('.menu__add-item-button');
  let itemsList = element.querySelector('.menu__list');

  addButton.onclick = function () {
    if (!textField.value) {
      return;
    }

    itemsList.insertAdjacentHTML(
      'beforeend',
      `
        <li class="menu__item">
          <b>
            ${ textField.value }
          </b>
        </li>
      `
    );

    textField.value = '';
  };

  itemsList.addEventListener('click', function(event) {
    let item = event.target.closest('.menu__item');

    if (!item || !itemsList.contains(item)) {
      return;
    }

    console.log(item.innerText);
  });
}

initializeMenu(
  document.querySelector('.menu')
);
