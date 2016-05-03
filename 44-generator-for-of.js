function* genFunc1() {
    yield 2;
    yield 3;
}

function* genFunc2() {
    yield 1;
    yield* genFunc1();
    yield* [4, 5];
}

var g = genFunc2();
console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3
console.log(g.next().value); // 4
console.log(g.next().value); // 5
console.log(g.next().done); // true

for (let v of genFunc2()) {
    console.log(v);
}