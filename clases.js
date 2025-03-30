class Book {
    constructor(name, authors, publishedYear){
        this.name = name;
        this.authors = authors;
        this.publishedYear = publishedYear;
    }

//este método se agrega a Book.prototypes
    fullName() {
    return this.name + " by " + this.authors + ". " + this.publishedYear;
}
}

//relación de herencia entre Ebook y Book
class Ebook extends Book {
    constructor(filesize, name, authors, publishedYear){
        super(name, authors, publishedYear);
        this.filesize = filesize;
    }
}

let eBook = new Ebook(2048, "Coding in React", ["Enrique Molinari"], 2021);

//Book.prototype es el prototipo de la instancia ebook
console.log(Book.prototype.isPrototypeOf(eBook)); //true
//el método fullName está en prototype
console.log(eBook.fullName()); 
//Ebook es una funcion, no una clase
console.log(typeof Ebook); //function