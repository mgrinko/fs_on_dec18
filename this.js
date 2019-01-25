'use strict';


const f = function() {
  this.name = "petya";

  console.log(this);
};

new f();




// () => {}                нет переменной this
//
//                         this === window
// f();                    this === undefined
// user.test()             this === user
// f.call(999)             this === 999
// el.addEL('click', f);   this === el
// setTimeout(f, 10);      this === window
//
// const g1 = f.bind(999);
//
// const g2 = function () {
//   f.call(999);
// };







