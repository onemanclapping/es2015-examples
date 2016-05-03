let s1 = Symbol("Unique symbol");
let s2 = Symbol("Unique symbol");

console.log(s1 === s2); // false
console.log(typeof s1); // "symbol"

try {
    let s3 = new Symbol(); // TypeError exception
} catch (e) {
    console.log(e.message);
    // "Symbol is not a constructor"
}

let obj = {
    [s1]: "foo"
};
console.log(obj[s1]); // "foo"