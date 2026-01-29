// ...Implement a class called Rectangle that has properties width and height.
//  The class should have a method called getArea that returns the area of the rectangle.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10, 20);

console.log('Rectangle area: ' + rect.getArea());

/**
 * Create a subclass called Square that extends the Rectangle class. 
The Square class should have a method called getPerimeter that
returns the perimeter of the square.
 */

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
    }

    getPerimeter() {
        return this.sideLength * 4;
    }
}

const square = new Square(25);

console.log('Square perimeter: ' + square.getPerimeter());
console.log('Square area: ' + square.getArea());

/*
 * Expected output:
 *
 * Rectangle area: 200
 * Square perimeter: 100
 * Square area: 625
 */