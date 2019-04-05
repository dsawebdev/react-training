//setup constructor to take name and age (default to 0)

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello my name is ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

//? PERSON
// const me = new Person('Devon Anderson', 41);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());

//? STUDENT
// const me = new Student('Devon Anderson', 41, 'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

//? TRAVELER
const me = new Traveler('Devon Anderson', 41, 'Athens');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());