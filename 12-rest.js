function myFunction(a, b, ...otherArgs) {
    console.log(otherArgs); // Outputs "[3, 4, 5]"
}
myFunction(1, 2, 3, 4, 5);

--- // ---

function myFunction(a, b) {
    let otherArgs = Array.prototype.slice.call(arguments, myFunction.length);
    console.log(otherArgs); // Outputs "[3, 4, 5]"
}
myFunction(1, 2, 3, 4, 5);