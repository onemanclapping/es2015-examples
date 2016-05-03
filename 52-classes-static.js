// Old
function Student(name) {
    this.name = name;
}
Student.prototype.printName =
    function () {
        console.log(this.name);
    }
Student.findName =
    function (student) {
        return student.name;
    }

// New
class Student {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(name);
    }
    static findName(student) {
        return student.name;
    }
}