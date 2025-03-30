//object literal 

let yo = {
    name: "Carla",
    sports: ["natacion", "canotaje"],       //arreglo
    address: {                             //objeto
        street: "Alberdi",
        number: 132,
    },
    allSports: function () {                //funcion
        console.log(this.sports);
    },
};

//un objeto vacio
let obj = {};

//desde ES6 es posible crear objetos literales utilizando variables con nomobre de propiedad
//ver línea 24
let aproperty = "phone";
let computed = {
    name1: "Carla",
    surname: "Beron",
    [aproperty]: "+123567865"
};

//interprete evalúa objeto: se crea una instancia
//acceder a propiedades de un objeto, notación: .

console.log(yo.name); //Carla
console.log(yo.sports[0]); //natacion
console.log(yo.address.street); //Alberdi
yo.allSports(); //invocando a la función 

//En javascript es posible agregar propiedades nuevas en tiempo de ejecución a los objetos* 

let objeto = {a: 1, b: 2};
//agrego nuevas propiedades al objeto
objeto.x = 3;
objeto.y = 4; 

//Utilizar la expresión <spread syntax> con objetos

let objeto1 = {
    a : 1, 
    b : 2, 
};
let objeto2 = {
    c : 3,
    d : 4, 
}

let objeto3 = {...objeto1, ...objeto2 };
//obj3 = { a: 1, b: 2, c: 3, d: 4 }


//crear objetos a partir de variables inicializadas
let a = 1,
    b = 2;
let objeto4 = {
    a,
    b,
};
//objeto4 = {a: 1, b: 2}

//constructor functions
function Book (name, authors, publishedYear) {
        this.name = name;                       //definir propiedades
        this.authors = authors;
        this.publishedYear = publishedYear;
        this.fullName = function () {
            return this.name + "by" + this.authors + ". " + publishedYear;
        };
    }

thisBook = new Book("Coding in React", ["Enrique Molinari"], 2021);

thisBook.fullName(); //Coding in React by Enrique Molinari 2021

archBook = new Book ("Coding an Architecture Style", ["Enrique Molinari"], 2020);

archBook.fullName(); //Coding an Architecture Style by Enrique Molinari, 2020


//objeto literal que modlela los datos de una tarjeta
function Tarjeta(name, surname, codigo){
    this.name = name;
    this.surname = surname;
    this.codigo = codigo;
    this.fullInfo = function (){
        return "nombre: " + this.name + ". " + "apellido: "+ this.surname + ". " + this.codigo;
    }
}
unaTarjeta = new Tarjeta("Maria", "Perez", "123 345 345");

infoTarjeta = unaTarjeta.fullInfo();

console.log(infoTarjeta);
