let buffer = new ArrayBuffer(80); // 80 -> length
let view = new DataView(buffer);

view.setInt32(8, 22, false); // Set 32-bit integer 22 on byte 8 in little-endian format

let number = view.getInt32(8, false); // Read the 32-bit integer on index 8

console.log(number); // 22