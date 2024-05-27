var rectangle = {
    width: 5,
    height: 10,
    Area: function() {
        return rectangle.width * rectangle.height;
    },
    perimeter: function() {
        return 2 * (rectangle.width + rectangle.height);
    },
    displayinfo: function (){
        document.write(`Rectangle Area is : ${rectangle.Area()} & Rectangle Perimeter is ${rectangle.perimeter()}`)
    }
};
rectangle.displayinfo()