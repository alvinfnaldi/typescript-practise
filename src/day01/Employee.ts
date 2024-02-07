// blueprint
class Employee {
  // declare field attribute
  empId?: number;
  firstName?: string;
  lastName?: string;

  // argument/parameter constructor
  // lebih dari 1 constructor -> overloading constructor
  constructor();
  constructor(empId: number, firstName: string, lastName: string);
  constructor(empId?: number, firstName?: string, lastName?: string) { }
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
  constructor(
    public carId: string,
    private rpm: number
  ) { }

  // implementation encapsulation
  getRpm(): number {
    return this.rpm;
  }

  setRpm(rpm: number) {
    this.rpm = rpm;
  }
}

let myCar = new Car("B101XU", 140);
console.log(`${myCar.carId} ${myCar.getRpm()}`);
myCar.setRpm(190);
console.log(`${myCar.carId} ${myCar.getRpm()}`);