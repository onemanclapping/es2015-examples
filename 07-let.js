let a = 12;

function myFunction() {
    console.log(a); // 12

    let b = 13;

    if (true) {
        let c = 14;
        console.log(b); // 13
    }

    console.log(c); // Reference Error Exception
}

myFunction();