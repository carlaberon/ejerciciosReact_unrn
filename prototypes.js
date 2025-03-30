//objeto literal que modela los datos de una tarjeta
function Tarjeta(name, surname, codigo){
this.name = name;
this.surname = surname;
this.codigo = codigo;
}
/* this.fullInfo = function (){
    return "nombre: " + this.name + ". " + "apellido: "+ this.surname + ". " + this.codigo;
}
} */
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

//prototype: cada objeto puede estar asociado a un objeto prototipo 
// del cual hereda todas las propiedades y metodos
//prototype chain: la búsqueda en cadena
