"use strict";
class Dog {
    sound() {
        console.log(`dog sound`);
    }
}
class Cat {
    soundcat() {
        console.log(`cat sound`);
    }
}
function executeSound(value) {
    if (value instanceof Dog) {
        value.sound();
    }
    else {
        value.soundcat();
    }
}
executeSound(new Dog());
executeSound(new Cat());
