"use strict";
class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sound() {
        console.log(`${this.name} sound`);
    }
}
class dog extends animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
}
let a1 = new animal("animal", 10);
let d1 = new dog("dog", 2, "dg breed");
console.log(a1);
console.log(d1);
a1.sound();
d1.sound();
