var deffered;
var promise = new Promise(function (resolve, reject) {
    deffered = {
        resolve,
        reject
    };
});

promise.then(function (res) {
    console.log(`I'm done with ${res}.`)
});

setTimeout(function () {
    deffered.resolve('ES5');
}, 1000);

// After 1 second...
// I'm done with ES5