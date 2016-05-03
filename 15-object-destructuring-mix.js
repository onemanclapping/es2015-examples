function myFunction(a, b, optionalStuff) {
    let c = optionalStuff.c || 1;
    let d = optionalStuff.d || 2;

    //...
}

function myNewFunction(a, b, {c, d}) {
    c = c || 1;
    d = d || 2;
    
    //...
}

function myAwesomeFn(a, b, {c = 1, d = 2}) {
    //...
}