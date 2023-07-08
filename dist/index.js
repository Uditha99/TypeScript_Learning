"use strict";
class Students {
    constructor(names, age, address) {
        this.names = names;
        this.age = age;
        this.address = address;
    }
}
let student = new Students("uditah", 90, { city: "kaluthara", post: 10 });
console.log(student);
