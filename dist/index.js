"use strict";
class Dog {
    constructor(names, age) {
        this.names = names;
        this.age = age;
    }
    setAge(age) {
        if (age < 0) {
            return;
        }
        else {
            this.age = age;
            console.log(this.age);
        }
    }
}
let dog = new Dog("Rosy", 10);
console.log(dog);
console.log(dog.setAge(-6));
console.log(dog.setAge(5));
