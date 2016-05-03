function myFunction(x, y, z) {
    x = x === undefined ? 1 : x;
    y = y === undefined ? 2 : y;
    z = z === undefined ? 3 : z;

    console.log(x, y, z);
}

myFunction(6, 7); // 6 7 3