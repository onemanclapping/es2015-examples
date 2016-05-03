const a = 12;

function myFunction() {
    console.log(a); // 12

    const b = 13;

    if (true) {
        const c = 14;
        console.log(b); // 13
    }

    console.log(c); // Reference Error Exception
}

myFunction();