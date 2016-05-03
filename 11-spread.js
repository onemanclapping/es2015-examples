let array1 = [2, 3, 4];
let array2 = [1];
let array3 = [1];

Array.prototype.push.apply(array2, array1);

console.log(array2); // Outputs "1, 2, 3, 4"

array3.push(...array1);

console.log(array3); // Outputs "1, 2, 3, 4"

console.log(...[1, 2, ...[3, 4, ...[5, 6]], ...[7, 8]]);
// Outputs "1, 2, 3, 4, 5, 6, 7, 8"