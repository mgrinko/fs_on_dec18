'use strict';


function f(x) {
  console.log(x);

  return Math.random() + x;
}

function makeCahching(f) {

  return function(...args) {
    return f.call(this, ...args);
  };
}

let fWithCaching =  makeCahching(multiply);


console.log(fWithCaching(1));
console.log(fWithCaching(1));
console.log(fWithCaching(2));
console.log(fWithCaching(3));
console.log(fWithCaching(1));
console.log(fWithCaching(2));



// // ------------------------------------------------------
// function createCallback(currentMenu, f) {
//   // let f = currentMenu.logTitle;
//
//   return function(...args) {
//     return f.call(currentMenu, ...args);
//   };
// }
//
// // ------------------------------------------------------
// function createCallback(currentMenu) {
//
//   return function(...args) {
//     let f = currentMenu.logTitle;
//     return f.call(currentMenu, ...args);
//   };
// }
//
// let logCurrentMenuTitle = createCallback(menu);
//
// // ------------------------------------------------------
// let logCurrentMenuTitle = function (...args) {
//   let f = menu.logTitle;
//   return f.call(menu, ...args);
// };
//
// // ------------------------------------------------------
// let logCurrentMenuTitle = function (...args) {
//   return menu.logTitle(...args);
// };



// let logCurrentMenuTitle = createCallback(menu, menu.logTitle);
// let logMishaTitle = createCallback({ title: 'misha'}, menu.logTitle);
//
// logCurrentMenuTitle();
// logMishaTitle();
// logMishaTitle();
// logMishaTitle();
// logMishaTitle();


// f()   // this === window

// 'use strict';
// f()                  // this === undefined
// obj.test()           // this === obj
// f.call(obj, 1, 2)    // this === obj
// f.apply(obj, [1, 2]) // this === obj
// () => {}             // this из замыкания
// [].map(f, 999)       // this === 999
// el.onclick = f;      // this === el
// el.addEL('click', f) // this === el
// setTimeout(f, 2000); // this === window




