interface Author {
    id: number;
    name: string;
}

interface Book {
    id: number;
    title: string;
    author: Author;
    isAvailable: boolean;
}

interface Member {
    id: number;
    name: string;
    email: string;
}

class Library {
    authors: Author[] = [];
    books: Book[] = [];
    members: Member[] = [];

    addAuthors(id: number, name: string): void {
        const newAuthor: Author = {
            id,
            name
        };
        this.authors.push(newAuthor);
        console.log(`Author ${name} added`);
    }

    addBooks(id: number, title: string, author: Author, isAvailable: boolean):void {
        const newBook: Book = {
            id,
            title,
            author,
            isAvailable
        };
        this.books.push(newBook);
        console.log(`Book ${title} by ${author.name} added.`);
    }

    addMembers(id: number, name: string, email: string): void {
        const newMember: Member = {
            id,
            name,
            email
        };
        this.members.push(newMember);
        console.log(`Member ${name} added`);
    }

    listAuthors(): void {
        console.log("Authors:");
        this.authors.forEach(author => {
            console.log(`${author.id}: ${author.name}`);
        });
    }

    listBooks(): void {
        console.log("Books:");
        this.books.forEach(book => {
            console.log(`${book.id}: ${book.title}; ${(book.isAvailable)?"available":"not available"}`);
        });
    }

    listMembers(): void {
        console.log("Members:");
        this.members.forEach(member => {
            console.log(`${member.id}: ${member.name}`);
        });
    }
    getBooksByAuthor(author: Author): Book[] {
        return this.books.filter(book => book.author === author);
    }
    borrowBook(id: number): void {
        const book = this.books.filter(book => book.id === id)[0];
        if (!book) {
            console.log("Book not found.");
            return;
        }
        if (book.isAvailable) {
            book.isAvailable = false;
            console.log(`"${book.title}" borrowed.`);
        } else {
            console.log(`"${book.title}" not available.`);
        }
    }
}

const library1 = new Library();
const author1 : Author = {id: 1,name: "Margaret Atwood"};
library1.addAuthors(author1.id,author1.name);
library1.addBooks(101,"The Handmaiden's Tale",author1,true);
library1.addMembers(201,"Rita","rita@gmail.com");

library1.listAuthors();
library1.listBooks();
library1.listMembers();
library1.borrowBook(101);
library1.listBooks();