function Book(title, author, type) {
    this.title = title || ""
    this.author = author || ""
    this.type = type || ""
}

function Box(height, width) {
    this.height = height || 40
    this.width = width || 40
    this.numOfBooks = 0
    this.content = []
}

Box.prototype.addBook = function(title, author, type) {
    var newBook = new Book(title, author, type)
    this.content.push(newBook)
    this.numOfBooks += 1;
};

Box.prototype.deleteBook = function(value) {
    for (var i = 0; i < this.content.length; i++) {
        if (this.content[i].title == value || this.content[i].type == value) {
            this.content.splice(i, 1)
            this.numOfBooks -= 1
            i--
        }
    }
};


Box.prototype.countBooks = function() {
    return this.content.length
};


Box.prototype.toString = function() {
    return `Box dimensions: ${this.height}x${this.width}, Number of books: ${this.countBooks()}`;
};


Box.prototype.valueOf = function() {
    return this.countBooks()
};

var box1 = new Box(10, 20);
box1.addBook("Book 1", "Author A", "comedy")
box1.addBook("Book 2", "Author B", "drama")
box1.addBook("Book 3", "Author C", "comedy")
box1.addBook("Book 4", "Author D", "comedy")
box1.addBook("Book 5", "Author E", "horror")

console.log(box1.toString())
console.log("Box 1 has " + box1.countBooks() + " books.")
console.log(box1.content)

box1.deleteBook("comedy")

console.log(box1.toString())
console.log("Box 1 has " + box1.countBooks() + " books.")
console.log(box1.content)


var box2 = new Box(15, 25);
box2.addBook("Book A", "Author F", "thriller");
box2.addBook("Book B", "Author G", "sci-fi");

console.log(box2.toString())
console.log("Box 2 has " + box2.countBooks() + " books.")


var totalBooks = box1 + box2;
console.log("Total books in both boxes: " + totalBooks)
