var Library = /** @class */ (function () {
    function Library() {
        this.authors = [];
        this.books = [];
        this.members = [];
    }
    Library.prototype.addAuthors = function (id, name) {
        var newAuthor = {
            id: id,
            name: name
        };
        this.authors.push(newAuthor);
        console.log("Author ".concat(name, " added"));
    };
    Library.prototype.addBooks = function (id, title, author, isAvailable) {
        var newBook = {
            id: id,
            title: title,
            author: author,
            isAvailable: isAvailable
        };
        this.books.push(newBook);
        console.log("Book ".concat(title, " by ").concat(author.name, " added."));
    };
    Library.prototype.addMembers = function (id, name, email) {
        var newMember = {
            id: id,
            name: name,
            email: email
        };
        this.members.push(newMember);
        console.log("Member ".concat(name, " added"));
    };
    Library.prototype.listAuthors = function () {
        console.log("Authors:");
        this.authors.forEach(function (author) {
            console.log("".concat(author.id, ": ").concat(author.name));
        });
    };
    Library.prototype.listBooks = function () {
        console.log("Books:");
        this.books.forEach(function (book) {
            console.log("".concat(book.id, ": ").concat(book.title, "; ").concat((book.isAvailable) ? "available" : "not available"));
        });
    };
    Library.prototype.listMembers = function () {
        console.log("Members:");
        this.members.forEach(function (member) {
            console.log("".concat(member.id, ": ").concat(member.name));
        });
    };
    Library.prototype.getBooksByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    };
    Library.prototype.borrowBook = function (id) {
        var book = this.books.filter(function (book) { return book.id === id; })[0];
        if (!book) {
            console.log("Book not found.");
            return;
        }
        if (book.isAvailable) {
            book.isAvailable = false;
            console.log("\"".concat(book.title, "\" borrowed."));
        }
        else {
            console.log("\"".concat(book.title, "\" not available."));
        }
    };
    return Library;
}());
var library1 = new Library();
var author1 = { id: 1, name: "Margaret Atwood" };
library1.addAuthors(author1.id, author1.name);
library1.addBooks(101, "The Handmaiden's Tale", author1, true);
library1.addMembers(201, "Rita", "rita@gmail.com");
library1.listAuthors();
library1.listBooks();
library1.listMembers();
library1.borrowBook(101);
library1.listBooks();
