"use strict";
function dev(num1, num2) {
    if (num2 == 0) {
        throw new Error("Wrong Input");
    }
    return num1 / num2;
}
try {
    let answer = dev(10, 0);
    console.log(answer);
}
catch (error) {
    console.log(error);
}
finally {
    console.log("ok");
}
