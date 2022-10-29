'use strict';
// const jones = {
//   name: 'sohan',
//   year: 1991,
//   calcAge: function () {
//     console.log(2031 - this.year);

//     const isMadila = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMadila();
//   },
//   greet: function () {
//     console.log(`hey${this.name}`);
//   },
// };
// jones.greet();
// jones.calcAge();
// const add = function (a, b) {
//   console.log(a + b);
//   console.log(arguments);
// };

// add(2, 5, 3, 11, 2);

const obj = {
  name: 'Jahidul',
  age: 23,
  job: 'software engineer',
  family: ['santa', 'ammu'],
};

const obj2 = { ...obj };
// const obj2 = Object.assign({}, obj);
obj.age = 24;
obj.family.push('abbu');
console.log('obj', obj);
console.log('obj2', obj2);
