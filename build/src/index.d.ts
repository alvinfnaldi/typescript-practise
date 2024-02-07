declare const productId: number;
declare const productName: string;
declare let isAvailable: boolean;
declare let myName: "alvin";
declare const sym1: unique symbol;
declare const myOrder: {
    sym1: string;
};
declare function getName(myName: string): string;
declare function calcSalary(salary: number, overtime: number): number;
declare function logError(message: string): void;
declare function guessWho(who: any): string;
type Height = number;
type Weight = number;
type Paket = {
    name: string;
    height: Height;
    weight: Weight;
};
declare let myPaket: Paket;
