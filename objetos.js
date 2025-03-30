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

