'use strict';


OldSlider.prototype._onDocumentMousemove = function(event) {
  let x = event.clientX - this._containerPosition.x - this._thumbElement.offsetWidth / 2;

  this._setPosition(x);
};
OldSlider.prototype._onDocumentMouseup = function() {
  document.removeEventListener('mousemove', this._mouseMoveForSlider);
  document.removeEventListener('mouseup', this._mouseUpForSlider);
};
OldSlider.prototype._onThumbMouseDown = function() {
  document.addEventListener('mousemove', this._mouseMoveForSlider);
  document.addEventListener('mouseup', this._mouseUpForSlider);
};

OldSlider.prototype.setPercent = function(percent) {
  let maxX = this._containerElement.clientWidth - this._thumbElement.offsetWidth;

  this._setPosition(maxX * percent / 100);
};

OldSlider.prototype._setPosition = function (x) {
  let maxX = this._containerElement.clientWidth - this._thumbElement.offsetWidth;

  if (x < 0) {
    x = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  this._thumbElement.style.left = x + 'px';
};


function OldSlider(sliderElement) {
  // this === slider1
  let x = 1;

  sliderElement.innerHTML = `
    <div class="slider__container">
      <div class="slider__thumb"></div>
    </div>
  `;


  this._mouseMoveForSlider = this._onDocumentMousemove.bind(this);
  this._mouseUpForSlider = this._onDocumentMouseup.bind(this);
  this._mouseDownForSlider = this._onThumbMouseDown.bind(this);


  this._thumbElement = sliderElement.querySelector('.slider__thumb');
  this._containerElement = sliderElement.querySelector('.slider__container');
  this._containerPosition = this._containerElement.getBoundingClientRect();

  this._thumbElement.addEventListener('mousedown', this._mouseDownForSlider);
}


const slider1 = new OldSlider( document.querySelector('#slider1') );

slider1.setPercent(50);





Slider.prototype._render = function() {
  this._element.classList.add('slider');

  this._element.innerHTML = `
    <div class="slider__container">
      <div class="slider__thumb"></div>
    </div>
  `;
};

Slider.prototype._onThumbMousedown = function() {
  document.addEventListener('mousemove', this._onDocumentMousemoveBound);
  document.addEventListener('mouseup', this._onDocumentMouseupBound);
};

Slider.prototype._onDocumentMousemove = function(event) {
  this._thumbElement.style.left = event.clientX + 'px';
};

Slider.prototype._onDocumentMouseup = function () {
  document.removeEventListener('mousemove', this._onDocumentMousemoveBound);
  document.removeEventListener('mouseup', this._onDocumentMouseupBound);
};

function Slider({ element }) {
  this._element = element;

  this._onThumbMousedownBound = (...args) => {
    this._onThumbMousedown(...args);
  };
  this._onDocumentMousemoveBound = this._onDocumentMousemove.bind(this);
  this._onDocumentMouseupBound = Slider.prototype._onDocumentMouseup.bind(this);

  this._render();

  this._containerElement = this._element.querySelector('.slider__container');
  this._thumbElement = this._element.querySelector('.slider__thumb');

  this._thumbElement.addEventListener('mousedown', this._onThumbMousedownBound);
}

// let slider1 = new Slider({
//   element: document.querySelector('#slider1'),
// });
