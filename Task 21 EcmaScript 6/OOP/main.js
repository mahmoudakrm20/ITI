import { Rectangle, Square, Circle } from './Classes.js';

let shapes = [
    new Rectangle(10, 5),
    new Square(4),
    new Circle(7)
];

shapes.forEach(shape => {
    console.log(shape.toString());
});
