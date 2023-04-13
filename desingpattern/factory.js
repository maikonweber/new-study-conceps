/* 
    UseCase : "You can create a server ErrorFactory"
    
*/


class Employee {
    speak() {
        return "Hi, I am a" + this.type + "employee"
    }
}

class FullTimeEmployee extends Employee {
    constructor(data) {
        super()
        this.type = 'full time'
    }
}


class PartTimeEmployee extends Employee {
    constructor(data) {
        super()
        this.type = "part time"

    }
}

class ConstractorEmployee extends Employee {
    constructor(data) {
    super()
    this.type = "constractor"
    }
}

class MyEmployeeFactory {
    createEmployee(data) {
        if(data.type == "fulltime") return new FullTimeEmployee(data)
        if(data.type == "partime") return new PartTimeEmployee(data)
        if(data.type == "contractor") return new ConstractorEmployee(data)
    }
}


( _ => {
    let factory = new MyEmployeeFactory()
    let types = ['fulltime', 'partime', 'contractor']
    let employees = [];
    for(let i = 0; i < 100; i++) {
        employees.push(factory.createEmployee({type : types[Math.floor(Math.random() * 2) + 1]}))
    }

    employees.forEach(e => console.log(e.speak()))
})()