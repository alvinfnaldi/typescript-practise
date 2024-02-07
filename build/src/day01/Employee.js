"use strict";
// blueprint
class Employee {
    constructor(empId, firstName, lastName) { }
}
// create object employee
// default/empty constructor
let emp1 = new Employee();
emp1.empId = 100;
emp1.firstName = "alvin";
emp1.lastName = "fr";
console.log(`${emp1.empId}`);
let emp2 = new Employee(101, "random", "name");
class Car {
    constructor(carId, rpm) {
        this.carId = carId;
        this.rpm = rpm;
    }
    // implementation encapsulation
    getRpm() {
        return this.rpm;
    }
    setRpm(rpm) {
        this.rpm = rpm;
    }
}
let myCar = new Car("B101XU", 140);
console.log(`${myCar.carId} ${myCar.getRpm()}`);
myCar.setRpm(190);
console.log(`${myCar.carId} ${myCar.getRpm()}`);
//# sourceMappingURL=Employee.js.map