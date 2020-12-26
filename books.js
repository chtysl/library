let myLibrary = [];
const books = document.querySelector(".books");
const addBookBtn = document.getElementById("add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(bookName) {
  myLibrary.push(bookName);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newBook = document.createElement("div");

    const bookTitle = document.createElement("h3");
    bookTitle.innerText = `Title: ${myLibrary[i].title}`;
    newBook.appendChild(bookTitle);

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerText = `Author: ${myLibrary[i].author}`;
    newBook.appendChild(bookAuthor);

    const bookPages = document.createElement("h3");
    bookPages.innerText = `Pages: ${myLibrary[i].pages}`;
    newBook.appendChild(bookPages);

    const bookRead = document.createElement("button");
    bookRead.classList.add("not-read");
    bookRead.innerText = "Not read";
    bookRead.addEventListener("click", () => {
      bookRead.classList.toggle("read");
      if (bookRead.classList.contains("read")) {
        bookRead.innerText = "Read";
      } else {
        bookRead.innerText = "Not read";
      }
    });
    newBook.appendChild(bookRead);

    const rmBookBtn = document.createElement("button");
    rmBookBtn.classList.add("rm-btn");
    rmBookBtn.innerText = "X";
    rmBookBtn.addEventListener("click", function removeBook(e) {
      e.target.parentElement.remove();
      myLibrary = myLibrary.filter((book) => book.title !== myLibrary[i].title);
    });

    newBook.appendChild(rmBookBtn);

    newBook.classList.add("book");
    books.appendChild(newBook);
  }
}

function createBook() {
  let bookNew = new Book(title.value, author.value, pages.value);
  addBookToLibrary(bookNew);
  books.innerHTML = "";
  displayBooks();
}

addBookBtn.addEventListener("click", createBook);
