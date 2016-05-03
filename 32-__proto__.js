// In ES5
var x = {x: 12};
var y = Object.create(x, {y: {value: 13}});
console.log(y.x); // 12
console.log(y.y); // 13

// In ES6
let a = {a: 12, __proto__: {b: 13}};
console.log(a.a); // 12
console.log(a.b); // 13