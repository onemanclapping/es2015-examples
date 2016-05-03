function* failingGeneratorFunc() {
    try {
        yield 1;
    } catch (e) {
        console.log('exception caught');
    }
    yield 2;
}

var generator = failingGeneratorFunc();
console.log(generator.next().value); // 1
var value = generator.throw('message').value;
// exception caught
console.log(value); // 2
console.log(generator.next().done); // true