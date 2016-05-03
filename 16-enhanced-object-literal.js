// Old
var x = 1;
var y = 2;

var obj = {
    x: x,
    y: y
    z: function () {

    }
};

// New
var x = 1;
var y = 2;

var obj = {
    x,
    y,
    function z() {
        super(); // Whaaat?
    }
}