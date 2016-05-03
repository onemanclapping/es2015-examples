let buffer = new ArrayBuffer(80); // 80 -> length
let typedArray = new Float64Array(buffer);

typedArray[4] = 11;

console.log(typedArray.length); // 80 * 8 / 64 = 10
console.log(typedArray[4]); // 11