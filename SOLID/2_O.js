/*
    Open close principle
 */
class Shape {
    area() {
        throw new Error('Area method is not defined in implementation')
    }
}
class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }
    area() {
        return Math.PI * this.radius ** 2
    }
}

class Square extends  Shape {
    constructor(width) {
        super()
        this.width = width
    }
    area() {
        return this.width ** 2
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}


class AreasCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }
    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calculation = new AreasCalculator([
        new Circle(10),
        new Square(10),
        new Rectangle(10, 10)
])
console.log(calculation.sum())



