function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function Author(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.books = [];
}

Author.prototype.addBook = function(book) {
  this.books.push(book);
};

const author1 = new Author("Osamu", "Dazai");
const book1 = new Book("No Longer Human", author1, 1948);
author1.addBook(book1);

const author2 = new Author("Wilbur", "Smith");
const book2 = new Book("Titans Of War", author2, 2022);
author2.addBook(book2);

const author3 = new Author("Lucy", "Clark");
const book3 = new Book("The Castaways", author3, 1978);
author3.addBook(book3);

console.log(author1.firstName + " " + author1.lastName + " books:", author1.books);
console.log(author2.firstName + " " + author2.lastName + " books:", author2.books);
console.log(author3.firstName + " " + author3.lastName + " books:", author3.books);
