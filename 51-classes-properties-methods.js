// Old
function Student(name) {
    this.name = name;
}
Student.prototype.printName =
    function () {
        console.log(this.name);
    }

// New
class Student {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(name);
    }
}