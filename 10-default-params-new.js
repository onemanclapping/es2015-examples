function myFunction(x = 1, y = 2, z = 1 + 2) {
    console.log(x, y, z);
}

myFunction(6, 7); // 6 7 3
myFunction(undefined, 6, 7); // 1 6 7