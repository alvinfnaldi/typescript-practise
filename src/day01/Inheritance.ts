{
  abstract class PersonAbstract {
    constructor(
      public fullName: string,
      public age: number
    ) { }
    sayHello(name: any): void { }
  }

  // parent class
  class Employee extends PersonAbstract {
    constructor(
      public empId: number,
      fullName: string,
      age: number
    ) {
      super(fullName, age);

    }

    // override
    sayHello(name: any): void {
      console.log("employee")
    }
  }

  // child class/subclass
  class Programmer extends Employee {
    constructor(
      empId: number,
      fullName: string,
      age: number,
      public skill: string
    ) {
      super(empId, fullName, age);
    }

    sayHello(name: any): void {
      console.log("from childclass")
    }

    // overloading method
    // upSalary(salary: number, prosen: number): void { }
    // upSalary(bonus: number): number { }
  }

  class Contract extends Employee {
    constructor(
      empId: number,
      fullName: string,
      age: number,
      public overtime: number
    ) {
      super(empId, fullName, age);
    }
  }

  class Customer extends PersonAbstract {
    constructor(
      public customerId: number,
      public fullName: string,
      public age: number
    ) {
      super(fullName, age);
    }
  }

  let emp3: Employee = new Employee(101, "afr", 19);
  let emp4: Programmer = new Programmer(101, "afr", 24, "coding");

  // let emp5: Employee = new emp4;

  const listEmployee: PersonAbstract[] = [];
  listEmployee.push(emp3, emp4);

  listEmployee.forEach(emp => console.log(`${emp.fullName} ${emp.age}`))
}