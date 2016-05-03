function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let generator = generatorFunc();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4
console.log(generator.next().done); // true