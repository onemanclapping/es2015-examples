var map = new Map();
var o = {n: 1};

map.set(o, "A");
map.set("2", 9);

console.log(map.has("2")); // true
console.log(map.get(o)); // "A"
console.log(...map); // [{n: 1}, "A"] ["2", 9]

map.delete("2");