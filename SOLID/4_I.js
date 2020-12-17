/*
    Interface segregation principle
*/
class Animal {
    constructor(name) {
        this.name = name
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Seafish extends Animal {}

const walker = {
    walk() {
        console.log(`Я бегаю ${this.name}`)
    }
}
const flyer = {
    fly() {
        console.log(`Я летаю ${this.name}`)
    }
}
const swimmer = {
    swim() {
        console.log(`Я плаваю ${this.name}`)
    }
}
Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flyer)
Object.assign(Seafish.prototype, swimmer)

const dog = new Dog('Рекс')
const eagle = new Eagle('Пернатый')
const fish = new Seafish('')

dog.walk()
dog.swim()

eagle.walk()
eagle.fly()

fish.swim()