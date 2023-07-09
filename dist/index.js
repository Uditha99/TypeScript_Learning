"use strict";
function setdata(value) {
    if (typeof value === 'number') {
        console.log(`this is number`);
    }
    else {
        console.log(`this is string`);
    }
}
setdata(10);
setdata("ssss");
