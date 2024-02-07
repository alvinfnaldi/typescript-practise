"use strict";
{
    class PersonAbstract {
        constructor(fullName, age) {
            this.fullName = fullName;
            this.age = age;
        }
        sayHello(name) { }
    }
    // parent class
    class Employee extends PersonAbstract {
        constructor(empId, fullName, age) {
            super(fullName, age);
            this.empId = empId;
        }
        // override
        sayHello(name) {
            console.log("employee");
        }
    }
    // child class/subclass
    class Programmer extends Employee {
        constructor(empId, fullName, age, skill) {
            super(empId, fullName, age);
            this.skill = skill;
        }
        sayHello(name) {
            console.log("from childclass");
        }
    }
    class Contract extends Employee {
        constructor(empId, fullName, age, overtime) {
            super(empId, fullName, age);
            this.overtime = overtime;
        }
    }
    class Customer extends PersonAbstract {
        constructor(customerId, fullName, age) {
            super(fullName, age);
            this.customerId = customerId;
            this.fullName = fullName;
            this.age = age;
        }
    }
    let emp3 = new Employee(101, "afr", 19);
    let emp4 = new Programmer(101, "afr", 24, "coding");
    // let emp5: Employee = new emp4;
    const listEmployee = [];
    listEmployee.push(emp3, emp4);
    listEmployee.forEach(emp => console.log(`${emp.fullName} ${emp.age}`));
    // console.log("")
}
//# sourceMappingURL=Inheritance.js.map