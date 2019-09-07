

class Person {
    constructor(name = 'Anon', age = 100, state = 'NY') {
        this.name = name;
        this.age = age;
        this.state = state;
    }
    getGreeting() {return `Hello I'm ${this.name}`}   
}


class Student extends Person {
    constructor(name, age, state, major) {
        super(name, age, state);
        this.major = major;
    }
    hasMajor() {
        return `${!!this.major}`
    }
    intro() {
        return `his name is ${this.name}, he lives in ${him.state} and is ${this.age} years old. His major is ${this.major}`
    }
}
class Traveler extends Student {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greet = super.getGreeting() 
        if (this.location) greet += ` I'm visiting from ${this.location}`
        return greet;
    }
}

const travel = new Traveler('T', '30', 'Maine')
travel.getGreeting() /*?*/

const me = new Person('Chris', 34, 'NY')
const her = new Student('CHRIS', 20, 'NY', 'CS')
const him = new Student('CHRIS', 20, 'NY', 'CS')

her.intro() 
him.intro() /*?*/
him.getGreeting() /*?*/


