/*
//objeto literal que modela los datos de una tarjeta
function Tarjeta(name, surname, codigo){
this.name = name;
this.surname = surname;
this.codigo = codigo;
}
/* this.fullInfo = function (){
    return "nombre: " + this.name + ". " + "apellido: "+ this.surname + ". " + this.codigo;
}
}
//prototype - herencia
Tarjeta.prototype.fullInfo = function () {
    return "nombre: " + this.name + ". " + "apellido: "+ this.surname + ". " + this.codigo;
}

unaTarjeta1 = new Tarjeta("Maria", "Perez", "123 345 345");
unaTarjeta2 = new Tarjeta("Jose", "Suarez", "123 345 345");

infoTarjeta1 = unaTarjeta1.fullInfo();
infoTarjeta2 = unaTarjeta2.fullInfo();
console.log(infoTarjeta1);
console.log(infoTarjeta2);
 */
//prototype: cada objeto puede estar asociado a un objeto prototipo 
// del cual hereda todas las propiedades y metodos
//prototype chain: la búsqueda en cadena

function Book(name, authors, publishedYear){
    this.name = name;
    this.authors = authors;
    this.publishedYear = publishedYear;
}

Book.prototype.fullName = function () {
    return this.name + " by" + this.authors + ". " + this.publishedYear;
}

thisBook = new Book ("Coding in React", ["Enrique Molinari"], 2021);
archBook = new Book ("Coding an Architecture Style", ["Enrique Molinari"], 2020);

//Javascript busca primer el método en la instacia, al no encontrarlo va al prototipo

infoBook1 = thisBook.fullName();
infoBook2 = archBook.fullName();
console.log(infoBook1);
console.log(infoBook2);

//toda cadena de prototipos termina en Object.prototype
//en el siguiente ejemplo javascript recorre la cadena hasta encontrar el método en Object
console.log(thisBook.valueOf());

//herencia
//creamos objeto Ebook que hereda de Book

function Ebook(filesize, name, authors, publishedYear){
    Book.call(this, name, authors, publishedYear); //call llama a la función constructora
    this.filesize = filesize;
}

let eBook = new Ebook(2048, "Coding in the React", ["Enrique Molinari"], 2021);

//definir el método fullName() como prototype 
// parámetros: instancia a la cual le asigno el prototipo, prototipo a asignar 
Object.setPrototypeOf(eBook, Book.prototype);

console.log(eBook.valueOf());
console.log(eBook.fullName());