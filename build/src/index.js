"use strict";
// data type primitive
/* boolean
number
symbol
any
never
void */
//1. declare basic variable use annotation
const productId = 10;
const productName = "TV";
let isAvailable = false;
//2. without annoty type
let myName;
console.log(`${productName}`);
//3. declare symbol
const sym1 = Symbol("id");
const myOrder = {
    sym1: "123",
};
console.log(myOrder["sym1"]);
//4. declare function
function getName(myName) {
    return myName;
}
function calcSalary(salary, overtime) {
    return salary + overtime * 50000;
}
function logError(message) {
    console.log("log error");
}
//5. union type
function guessWho(who) {
    if (typeof who === "number") {
        return "you're a number";
    }
    if (typeof who === "string") {
        return "you're a string";
    }
    return "";
}
console.log(`${guessWho("alvin")}`);
console.log(`${guessWho(1234)}`);
let myPaket = {
    name: "TV",
    height: 12,
    weight: 15,
};
console.log(`${myPaket.name} ${myPaket.height} ${myPaket.weight}`);
//# sourceMappingURL=index.js.map