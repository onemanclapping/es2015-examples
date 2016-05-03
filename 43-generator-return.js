function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
}

var generator = generatorFunc();
console.log(generator.next().value); // 1
console.log(generator.return(22).value); // 22
console.log(generator.next().done); // true