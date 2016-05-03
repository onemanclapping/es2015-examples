let obj = {
    array: [1, 2, 3, 4],
    nextIndex: 0,
    next: function () {
        return this.nextIndex < this.array.length ?
            {value: this.array[nextIndex++], done: false} :
            {done: true};
    }
};
console.log(obj.next().value); // 1
console.log(obj.next().value); // 2
console.log(obj.next().value); // 3
console.log(obj.next().value); // 4
console.log(obj.next().done); // true