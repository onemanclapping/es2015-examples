var a = 12;

function myFunction() {
    console.log(a); // 12

    var b = 13;

    if (true) {
        var c = 14;
        console.log(b); // 13
    }

    console.log(c); // 14
}