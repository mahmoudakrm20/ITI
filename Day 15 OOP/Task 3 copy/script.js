function Author(name, email) {
    this.name = name;
    this.email = email;
}


function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
}


var books = [];
var authors = [];

document.getElementById("submitBooksNumber").addEventListener("click", function () {
    var numBooks = parseInt(document.getElementById("numBooks").value);
    var booksNumberError = document.getElementById("booksNumberError");
    if (isNaN(numBooks) || numBooks < 1) {
        booksNumberError.innerHTML = document.getElementById("numBooks").title;
    } else {
        booksNumberError.innerHTML = "";
        document.getElementById("booksNumberInput").style.display = "none";
        document.getElementById("bookForm").style.display = "block";
        document.getElementById("numBooks").value = numBooks; 
    }
});

document.getElementById("addBook").addEventListener("click", function () {
    var bookName = document.getElementById("bookName").value;
    var bookPrice = document.getElementById("bookPrice").value;
    var authorName = document.getElementById("authorName").value;
    var authorEmail = document.getElementById("authorEmail").value;

    var isValid = true;
    document.getElementById("bookNameError").innerHTML = "";
    document.getElementById("bookPriceError").innerHTML = "";
    document.getElementById("authorNameError").innerHTML = "";
    document.getElementById("authorEmailError").innerHTML = "";

    if (bookName.length < 2) {
        document.getElementById("bookNameError").innerHTML = document.getElementById("bookName").title;
        isValid = false;
    }

    if (isNaN(bookPrice) || bookPrice === "" || parseFloat(bookPrice) <= 0) {
        document.getElementById("bookPriceError").innerHTML = document.getElementById("bookPrice").title;
        isValid = false;
    }

    if (authorName.length < 2) {
        document.getElementById("authorNameError").innerHTML = document.getElementById("authorName").title;
        isValid = false;
    }


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(authorEmail)) {
        document.getElementById("authorEmailError").innerHTML = document.getElementById("authorEmail").title;
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    
    var author = new Author(authorName, authorEmail);
    var book = new Book(bookName, parseFloat(bookPrice), author);

 
    authors.push(author);
    books.push(book);

  
    var table = document.getElementById("bookList");
    table.innerHTML += `
    <tr>
    <td>${book.name}</td>
    <td>${book.price}</td>
    <td>${book.author.name}</td>
    <td>${book.author.email}</td>
    </tr>
`;

    document.getElementById("bookName").value = "";
    document.getElementById("bookPrice").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("authorEmail").value = "";

    var numBooksLeft = parseInt(document.getElementById("numBooks").value) - 1;
    document.getElementById("numBooks").value = numBooksLeft;

    if (numBooksLeft === 0) {
        document.getElementById("bookForm").style.display = "none";
        document.getElementById("bookTable").style.display = "table";
    }
    console.log(authors,books)
});