var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('ES5');
    }, 1000);
});

promise.then(function (res) {
    console.log(`I'm done with ${res}.`)
});

// After 1 second...
// I'm done with ES5