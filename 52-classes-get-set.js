// Old
function Student(name) {
    this._name_ = name;

    Object.defineProperty(this, 'name', {
        get: function () {
            // Capitalize
            return this._name_.charAt(0).toUpperCase() +
                this._name_.slice(1);
        },
        set: function (name) {
            this._name_ = name;
        }
    });
}

// New
class Student {
    constructor(name) {
        this._name_ = name;
    }
    get name() {
        return this._name_.charAt(0).toUpperCase() +
            this._name_.slice(1);
    }
    set name(name) {
        this._name_ = name;
    }
}