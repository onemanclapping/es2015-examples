let obj = {
    array: [1, 2, 3],
    nextIndex: 0,
    [Symbol.iterator] = function () {
        return {
            array: this.array,
            nextIndex: this.nextIndex,
            next: function () {
                return this.nextIndex < this.array.length ?
                    {value: this.array[nextIndex++], done: false} :
                    {done: true};
            }
        }
    }
}

let iterable = obj[Symbol.iterator]();
console.log(iterable.next().value); // 1
console.log(iterable.next().value); // 2
console.log(iterable.next().value); // 3
console.log(iterable.next().done); // true