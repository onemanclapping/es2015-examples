let set = new Set('Hello!!!');

set.add(12);
set.add({});

set.delete('e');

console.log(set.has('l')); // true
console.log(set.size); // 6
console.log(...set);
// H l o ! 12 {}

set.clear();