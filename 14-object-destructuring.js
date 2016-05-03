let someInfo = {
    name: 'André',
    age: 26
};

let name = someInfo.name;
let age = someInfo.age;

// OR

let {name, age} = someInfo;

let {name: x, age: y} = someInfo;

console.log(x); // André