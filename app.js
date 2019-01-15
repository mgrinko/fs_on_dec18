'use strict';

function activateTooltipBehavior(container) {
  let tooltips = Array.from(
    document.querySelectorAll('[data-tooltip]')
  );

  container.style.position = 'relative';

  container.insertAdjacentHTML('beforeend', `
    <div class="tooltip tooltip--hidden"></div>
  `);

  let tooltipElement = container.lastElementChild;


  function setTooltipFor(tooltipTarget) {
    tooltipElement.classList.remove('tooltip--hidden');
    tooltipElement.innerHTML = tooltipTarget.dataset.tooltip;

    let containerPosition = container.getBoundingClientRect();
    let targetPosition = tooltipTarget.getBoundingClientRect();

    let x = targetPosition.left - containerPosition.left;
    let y = targetPosition.top - containerPosition.top - tooltipElement.offsetHeight;

    if (y + containerPosition.top < 0) {
      y = targetPosition.bottom - containerPosition.top;
    }

    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y + 'px';
  }

  container.addEventListener('mouseover', function (event) {
    let tooltipTarget = event.target.closest('[data-tooltip]');

    if (!tooltipTarget || !container.contains(tooltipTarget)) {
      return;
    }

    setTooltipFor(tooltipTarget);
  });

  container.addEventListener('mouseout', function(event) {
    let tooltipTarget = event.target.closest('[data-tooltip]');

    if (!tooltipTarget || !container.contains(tooltipTarget)) {
      return;
    }

    tooltipElement.classList.add('tooltip--hidden');
    tooltipElement.innerHTML = '';
  });
}


activateTooltipBehavior(document.body);
