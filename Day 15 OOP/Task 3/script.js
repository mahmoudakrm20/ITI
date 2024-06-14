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
    
    var bookName = document.getElementById("bookName").value.trim();
    var bookPrice = parseFloat(document.getElementById("bookPrice").value);
    var authorName = document.getElementById("authorName").value.trim();
    var authorEmail = document.getElementById("authorEmail").value.trim();

   
    var isValid = true;
    var bookNameError = document.getElementById("bookNameError");
    var bookPriceError = document.getElementById("bookPriceError");
    var authorNameError = document.getElementById("authorNameError");
    var authorEmailError = document.getElementById("authorEmailError");

    if (bookName.length < 2) {
        bookNameError.innerHTML = "Book name is required and should be at least 2 characters long.";
        isValid = false;
    } else {
        bookNameError.innerHTML = "";
    }

    if (isNaN(bookPrice) || bookPrice <= 0) {
        bookPriceError.innerHTML = "Price must be a positive number.";
        isValid = false;
    } else {
        bookPriceError.innerHTML = "";
    }

    if (authorName.length < 2) {
        authorNameError.innerHTML = "Author name is required and should be at least 2 characters long.";
        isValid = false;
    } else {
        authorNameError.innerHTML = "";
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(authorEmail)) {
        authorEmailError.innerHTML = "Author email is required and should be in the format name@example.com.";
        isValid = false;
    } else {
        authorEmailError.innerHTML = "";
    }

    // If any validation fails, stop  execution
    if (!isValid) {
        return;
    }

    
    var author = new Author(authorName, authorEmail);
    var book = new Book(bookName, bookPrice, author);

    
    authors.push(author);
    books.push(book);

   
    renderTable();

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
});


function renderTable() {
    var table = document.getElementById("bookList");
    table.innerHTML = ""; 
    
    
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var row = table.insertRow();

        
        var cell1 = row.insertCell(0);
        cell1.textContent = book.name;

        var cell2 = row.insertCell(1);
        cell2.textContent = book.price;

        var cell3 = row.insertCell(2);
        cell3.textContent = book.author.name;

        var cell4 = row.insertCell(3);
        cell4.textContent = book.author.email;

        
        var cell5 = row.insertCell(4);
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.setAttribute("data-index", i);
        editButton.classList.add("editButton");
        cell5.appendChild(editButton);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-index", i);
        deleteButton.classList.add("deleteButton");
        cell5.appendChild(deleteButton);
    }
}


document.addEventListener("click", function(event) {
    var target = event.target;

    
    if (target.classList.contains("editButton")) {
        var index = parseInt(target.getAttribute("data-index"));
        editBook(index);
    }

  
    if (target.classList.contains("deleteButton")) {
        var index = parseInt(target.getAttribute("data-index"));
        deleteBook(index);
    }


    if (target.classList.contains("saveButton")) {
        var index = parseInt(target.getAttribute("data-index"));
        saveBook(index);
    }

    
    if (target.classList.contains("cancelButton")) {
        renderTable(); 
    }
});


function editBook(index) {
    
    var row = document.getElementById("bookList").rows[index];

    for (var i = 0; i < 4; i++) { 
        var cell = row.cells[i];
        var currentValue = cell.textContent.trim();

        
        var input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;

        
        cell.innerHTML = "";
        cell.appendChild(input);
    }

    
    var cell5 = row.cells[4];
    cell5.innerHTML = `
        <button class="saveButton" data-index="${index}">Save</button>
        <button class="cancelButton" data-index="${index}">Cancel</button>
    `;
}


function saveBook(index) {
    var row = document.getElementById("bookList").rows[index];
    var cells = row.cells;

   
    books[index].name = cells[0].querySelector("input").value;
    books[index].price = parseFloat(cells[1].querySelector("input").value);
    books[index].author.name = cells[2].querySelector("input").value;
    books[index].author.email = cells[3].querySelector("input").value;

    renderTable();
}


function deleteBook(index) {
    books.splice(index, 1); 
    authors.splice(index, 1); 
    renderTable(); 
}
