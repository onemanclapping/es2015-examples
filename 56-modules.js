// math_modules/logarithm.js
var LN2 = Math.LN2;
var N10 = Math.LN10;

function getLN2() {
    return LN2;
}

function getLN10() {
    return LN10;
}

export {getLN2, getLN10};

// math_modules/trigonometry.js
var cos = Math.cos;
var sin = Math.sin;

function getSin(value) {
    return sin(value);
}

function getCos(value) {
    return cos(value);
}

export {getSin, getCos};

// math.js
import * as logarithm from "math_modules/logarithm";
import * as trigonometry from "math_modules/trigonometry";

console.log(logarithm.getLN2());
console.log(trigonometry.getSin(3));