class Person {
    constructor(name,age){
        this.name = name
        this.age = age 
    }

    greeting(){
        console.log(`hi my name is ${this.name} and i am ${this.age} years old`)
    }
}

module.exports = Person;