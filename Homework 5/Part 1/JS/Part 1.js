let library = {
    name : "Akademska kniga",
    books : ["Hamlet", "Romeo & Juliet", "The Iliad & The Odyssey", "Coriolanus"],
    adress : "Partizanski Odredi 23",
    numberOfMembers : 60,
    printBooks : function(){
        console.log("Books in library: ");
        this.books.forEach(b => console.log(b));
    },
    addBook : function(book){
        Object.assign(this.books, book);
    }
}

let book = {
    title : "The Village Beyond the Seven Ash Trees",
    genre : "novel",
    libraries : ["Akademska kniga", "Prosvetno delo", "Sakam knigi"],
    authors : ["William Shakespeare", "Blaze Koneski", "Slavko Janevski"],
    addLibrary : function(lib){
        library.books.push(lib);
    },
    removeLibrary : function(lib){
        library.books.forEach(l => lib == l && library.books.splice(library.books.indexOf(l), 1));
    }
}

let author = {
    firstName : "Slavko",
    lastName : "Janevski",
    yearOfBirth : 1921,
    books : [],
    currentBook : null,
    startBook : function(book){
        if(this.currentBook == null) this.currentBook = book;
        else if(this.currentBook != null) {
            this.books.push(this.currentBook);
            this.currentBook = book;
        }
    }
}

book.addLibrary("The Tempest");
book.removeLibrary("Coriolanus");
author.startBook("Sekerna prikazna");
library.addBook(book);
library.printBooks();


