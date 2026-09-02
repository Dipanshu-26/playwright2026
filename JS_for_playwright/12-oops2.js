// OOPs Concepts in JavaScript

// JavaScript supports OOP using:
//     class
//     constructor
//     extends
//     super
//     getters/setters

// The 4 main OOPs concepts are:
//     Encapsulation
//     Abstraction
//     Inheritance
//     Polymorphism
//     Static Methods

// 1. Encapsulation — Protecting and Controlling Data
//---------------------------------------------------------
// Encapsulation means keeping data and the methods that operate on that data together inside a class, 
// while controlling direct access to internal data.

// In JavaScript, # creates a private field.

class BankAccount{
    #balance = 10000 //private property
    deposit(amt){
        this.#balance += amt       // #balance = #balance + amt
    }

    withdraw(amt){
        this.#balance -= amt       // #balance = #balance + amt
    }

    getBalance(){
        return this.#balance
    }
}

let q1=new BankAccount()
q1.deposit(2000)
let bal1=q1.getBalance()
console.log(bal1)
q1.withdraw(5000)
bal1=q1.getBalance()
console.log(bal1)

//console.log(q1.balance)

//---------------------------------------------------------------------------------------------------------------
// 2. Abstraction — Hiding Implementation Details
//  Abstraction means hiding complex internal implementation and showing only what the user needs to use.

class Car{
    start(){
        this.#statEngine()
        this.#supplyFuel()
    }

    #statEngine(){
        console.log("engine started")
    }
    #supplyFuel(){
        console.log("supplying fuel...")
    }
}
let cr=new Car()
cr.start()
//cr.#endregion()

//----------------------------------------------------------------------------------------------------------

// 3. Inheritance — Reusing Parent Class Features
// Inheritance allows one class to inherit properties and methods from another class.
// In JavaScript, we use extends.

// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// const dog = new Dog();

// dog.eat();   // Inherited from Animal
// dog.bark();  // Dog's own method

// A Manager is an Employee, so the Manager can inherit common Employee functionality.
// Remember: Inheritance = Reuse functionality from a parent class
//----------------------------------------------------------------------------------------------------------

// 4. Polymorphism — Same Method, Different Behavior
// Polymorphism means the same method name can behave differently depending on the object.
// A common example is method overriding.

class Animal{
    sound(){
        console.log("animal makes sound")
    }
}

class Dog extends Animal{
    sound(){
        console.log("bow bow")
    }
}

class Cat extends Animal{
    // sound(){
    //     console.log("mew mwe")
    // }
    noise(){
        console.log("noise")
    }
}

let an = new Animal()
let dg=new Dog()
let ct = new Cat()

an.sound()
dg.sound()
ct.sound()
ct.noise()

//Remember: Polymorphism = Same method/interface + Different behavior
//--------------------------------------------------------------------------------------------
// Encapsulation: Using private fields and methods to hide data.
// Abstraction: Exposing methods without implementation details.
// Inheritance: Using extends to reuse class behavior.
// Polymorphism: Same method name behaving differently at runtime.

//--------------------------------------------------------------------------------------------------
//Static method
// A static method belongs to the class and is called using the class name, 
// while a non-static method belongs to an instance (object) and requires an object to call it.

class Employee{
    showName(){
        console.log("dipanshu")
    }

    //static method
    static showCompany(){
        console.log("abc Technology")
    }


}

let q2 = new Employee()
q2.showName()
Employee.showCompany()
//q2.showCompany()