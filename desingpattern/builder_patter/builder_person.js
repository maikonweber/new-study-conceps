class Person {
    constructor(name, age, email, phoneNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}

class PersonBuilder {
    constructor() {
        this.name = "";
        this.age = 0;
        this.email = "";
        this.phoneNumber = "";
    }

    withName (name) {
        this.name = name;
        return this;
    }
    withAge(age) {
        this.age = age
        return this;
    }
    withEmail (email) {
        this.email = email
        return this;
    }

    withPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
        return this;
    }

    build() {
        return new Person(this.name, this.age, this.email, this.phoneNumber);
    }
}


const person = new PersonBuilder()
    .withName("Alice")
    .withAge(30)
    .withEmail("alice@example.com")
    .build();

const person1 = new PersonBuilder()
    .withName('Bob')
    .withPhoneNumber('555-111')
    .build();
    

console.log(person, person1)