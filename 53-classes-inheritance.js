class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
    printSchool() {
        console.log(this.school);
    }
    superPrint() {
        super.printName();
        this.printSchool();
    }
}

var aStudent =
    new Student('André', 'BLIP');

aStudent.printName();
// André

aStudent.printSchool();
// BLIP

aStudent.superPrint();
// André
// BLIP