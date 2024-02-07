// data type primitive
/* boolean
number
symbol
any
never
void */

//1. declare basic variable use annotation
const productId: number = 10;
const productName: string = "TV";
let isAvailable: boolean = false;

//2. without annoty type
let myName: "alvin";

console.log(`${productName}`);

//3. declare symbol
const sym1 = Symbol("id");
const myOrder = {
  sym1: "123",
};

console.log(myOrder["sym1"]);

//4. declare function
function getName(myName: string): string {
  return myName;
}

function calcSalary(salary: number, overtime: number): number {
  return salary + overtime * 50_000;
}

function logError(message: string): void {
  console.log("log error");
}

//5. union type
function guessWho(who: any): string {
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

//6. alias type
type Height = number;
type Weight = number;

type Paket = {
  name: string;
  height: Height;
  weight: Weight;
};

let myPaket: Paket = {
  name: "TV",
  height: 12,
  weight: 15,
};

console.log(`${myPaket.name} ${myPaket.height} ${myPaket.weight}`);