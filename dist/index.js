"use strict";
function sayHello(messag) {
    console.log(`Message : ${messag}`);
}
sayHello("Uditha");
const helloIsuru = (messages) => {
};
const horekda = (names, Theif) => {
    if (Theif) {
        console.log(`${names}`);
    }
    else {
        console.log(`${names}`);
    }
};
horekda("ranil", true);
horekda('anura');
function sum(...values) {
    let ttl = 0;
    for (let temp of values) {
        ttl += temp;
    }
    return ttl;
}
console.log(sum(10, 20, 30));
