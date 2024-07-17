function Shape() {
    if (this.constructor == Shape) {
        throw new Error("Cant create an instance of Shape");
    }
}

// rectangle

function Rectangle(width, height) {
    Shape.call(this); 
    this.width = width;
    this.height = height;
    Rectangle.incrementCount();
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;


Rectangle.prototype.area = function() {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function() {
    return 2 * (this.width + this.height);
};


Rectangle.prototype.toString = function() {
    return "Rectangle: Width = " + this.width + ", Height = " + this.height + ", Area = " + this.area() + ", Perimeter = " + this.perimeter();
};


Rectangle.Count = 0;


Rectangle.incrementCount = function() {
    Rectangle.Count++;
};


Rectangle.getInstanceCount = function() {
    return Rectangle.Count;
};

//Square

function Square(side) {
    Rectangle.call(this, side, side);
}


Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;


Square.prototype.toString = function() {
    return "Square: Side = " + this.width + ", Area = " + this.area() + ", Perimeter = " + this.perimeter();
};


try {
    var shape = new Shape(); 
} catch (error) {
    console.log(error.message); 
}

var rect1 = new Rectangle(10, 20);
console.log(rect1.toString()); 

var rect2 = new Rectangle(5, 15);
console.log(rect2.toString()); 

var square1 = new Square(10);
console.log(square1.toString()); 

console.log("Number of Rectangle instances: " + Rectangle.getInstanceCount()); 
