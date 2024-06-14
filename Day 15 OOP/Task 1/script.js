function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.Area = function() {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function() {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.displayInfo = function() {
    document.write(`Rectangle Area is: ${this.Area()} & Rectangle Perimeter is: ${this.perimeter()}`);
};

var myRectangle = new Rectangle(6, 10);
myRectangle.displayInfo();
