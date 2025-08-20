// =============================
// 1. CLASSICAL INHERITANCE (ES6 Classes)
// =============================

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // Private field (modern JS)
        #energy = 100; 
    }

    // Public method
    eat(food) {
        console.log(`${this.name} eats ${food}`);
        this.#energy += 10;
    }

    // Getter/Setter
    get energy() { return this.#energy; }
    set energy(value) { this.#energy = Math.max(0, value); }

    // Static method
    static describe() { console.log('Animals are living beings'); }

    // Abstract method (enforced via throw)
    move() { throw new Error('Must implement move()'); }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    // Method overriding
    move() { console.log(`${this.name} runs on 4 legs`); }

    // Static property
    static species = 'Canis lupus familiaris';
}

// Usage
const rex = new Dog('Rex', 5, 'German Shepherd');
rex.eat('bone');
console.log(rex.energy); // 110
Dog.describe(); // Static call
console.log(Dog.species); // Canis lupus familiaris


// =============================
// 2. PROTOTYPAL INHERITANCE (Old-School JS)
// =============================

function Vehicle(type) {
    this.type = type;
    this.speed = 0;
    
    // Private variable using closure
    const maxSpeed = 200;
    
    this.accelerate = function(amount) {
        this.speed = Math.min(this.speed + amount, maxSpeed);
        console.log(`Accelerating to ${this.speed} km/h`);
    };
}

Vehicle.prototype.stop = function() {
    this.speed = 0;
    console.log('Stopped');
};

function Car(make, model) {
    Vehicle.call(this, 'Car'); // Call parent constructor
    this.make = make;
    this.model = model;
}

// Set up prototype chain
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
    console.log(`${this.make} ${this.model} honks!`);
};

// Usage
const myCar = new Car('Toyota', 'Camry');
myCar.accelerate(50);
myCar.honk();
myCar.stop();


// =============================
// 3. DESIGN PATTERNS
// =============================

// Singleton Pattern
class DatabaseConnection {
    constructor() {
        if (!DatabaseConnection.instance) {
            this.connection = 'Connected to DB';
            DatabaseConnection.instance = this;
        }
        return DatabaseConnection.instance;
    }
}

const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();
console.log(db1 === db2); // true

// Factory Pattern
class ShapeFactory {
    createShape(type) {
        switch(type) {
            case 'circle': return new Circle();
            case 'square': return new Square();
            default: throw new Error('Invalid shape');
        }
    }
}

class Circle {
    draw() { console.log('Drawing circle'); }
}
class Square {
    draw() { console.log('Drawing square'); }
}

const factory = new ShapeFactory();
factory.createShape('circle').draw();

// Observer Pattern
class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    notify(data) {
        this.observers.forEach(obs => obs.update(data));
    }
}

class Observer {
    update(data) {
        console.log(`Received data: ${data}`);
    }
}

const subject = new Subject();
subject.subscribe(new Observer());
subject.notify('Hello Observers!');

// Decorator Pattern
function logMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
        console.log(`Calling ${key} with args:`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class Calculator {
    @logMethod
    add(a, b) {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3);


// =============================
// 4. ADVANCED CONCEPTS
// =============================

// Mixins (Composition)
const Walker = {
    walk() { console.log(`${this.name} walks`); }
};

const Swimmer = {
    swim() { console.log(`${this.name} swims`); }
};

class Amphibian {
    constructor(name) { this.name = name; }
}

Object.assign(Amphibian.prototype, Walker, Swimmer);

const frog = new Amphibian('Freddy');
frog.walk();
frog.swim();

// Abstract Class Implementation
class AbstractClass {
    constructor() {
        if (new.target === AbstractClass) {
            throw new TypeError("Cannot instantiate abstract class");
        }
    }
    
    abstractMethod() {
        throw new Error("Must override abstractMethod()");
    }
}

class ConcreteClass extends AbstractClass {
    abstractMethod() {
        console.log("Implemented abstract method");
    }
}

// const abs = new AbstractClass(); // Throws error
const concrete = new ConcreteClass();
concrete.abstractMethod();

// Private Fields & Methods (Modern JS)
class BankAccount {
    #balance = 0;
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        }
    }
    
    getBalance() { return this.#balance; }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance()); // 50
// console.log(account.#balance); // SyntaxError: Private field '#balance'

// Static Blocks (ES2022)
class TemperatureConverter {
    static #celsiusToFahrenheit(c) { return (c * 9/5) + 32; }
    static #fahrenheitToCelsius(f) { return (f - 32) * 5/9; }
    
    static {
        console.log('Static block executed');
    }
}

TemperatureConverter.staticBlockExecuted = true;


// =============================
// 5. EDGE CASES & BEST PRACTICES
// =============================

// instanceof checks
console.log(rex instanceof Dog);       // true
console.log(rex instanceof Animal);    // true
console.log(rex instanceof Object);    // true

// Prototype pollution prevention
Object.freeze(Object.prototype);
Object.freeze(Array.prototype);

// Proper this binding
class Button {
    constructor() {
        this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler() {
        console.log('Button clicked!');
    }
}

const button = new Button();
setTimeout(button.clickHandler, 1000);

// Factory with caching
class UserFactory {
    constructor() {
        this.cache = new Map();
    }
    
    createUser(id, name) {
        if (!this.cache.has(id)) {
            this.cache.set(id, { id, name });
        }
        return this.cache.get(id);
    }
}

// Immutable objects
const immutablePerson = Object.freeze({
    name: 'John',
    age: 30,
    address: Object.freeze({ city: 'New York' })
});

// immutablePerson.age = 31; // Fails silently in strict mode


// =============================
// COMPLETE COVERAGE SUMMARY
// =============================
/*
✅ Classical Inheritance (extends, super)
✅ Prototypal Inheritance (prototype chain)
✅ Encapsulation (private fields, getters/setters)
✅ Polymorphism (method overriding)
✅ Abstraction (abstract methods/classes)
✅ Static Members (methods/properties)
✅ Design Patterns (Singleton, Factory, Observer, Decorator)
✅ Mixins/Composition
✅ Edge Cases (instanceof, this binding, prototype pollution)
✅ Modern Features (private fields, static blocks)
✅ Best Practices (immutability, caching)
*/