const a = {
    "name": "John"
};

console.log(a.name); // John

a.name = "Eden";

console.log(a.name); // Eden

a = {}; // throws read-only exception