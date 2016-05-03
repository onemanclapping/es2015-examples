function* anotherGeneratorFunc() {
    let a = yield 12;
    let b = yield a + 1;
    let c = yield b + 2;
    yield c + 3;
}

let anotherGenerator = anotherGeneratorFunc();

console.log(anotherGenerator.next().value); // 12
console.log(anotherGenerator.next(5).value); // 6
console.log(anotherGenerator.next(11).value); // 13
console.log(anotherGenerator.next(78).value); // 81
console.log(anotherGenerator.next().done); // true