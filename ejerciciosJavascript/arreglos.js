//un arreglo vacio
let empty = [];

//un arreglo de cuatro elementos
let family = ["Jose", "Nicolas", "Lucia", "Enrique"];

//acceso por índice

family[0];
family[1];
family[2];
family[3];

//agregar un elemento al final del arreglo
family.push("Pablo");

//agregar todos los elementos de un arreglo a otro arreglo con <spread  syntax>

let myParents = ["EnriqueR", "Susana"];
let JoseParents =["Eduardo", "Graciela"];
let familia = ["Jose", "Nicolas"];
let all = [...myParents, ...JoseParents, ...familia];

console.log(all);

//usar <spread sintax> para indicar un número indefinido de argumentos en una funcion

function restParams(param1, param2, ...params){
    //param1 es 1 
    //param2 es  2
    //params es [3, 4, 5]
}

//invoco a la función restParams
restParams(1,2,3,4,5);

//iterar sobre un arreglo utilizando la forma clásica: for
let family1 = ["Jose", "Nicolas", "Lucia", "Enrique"];
for (let element of family1){
    console.log("regular for: ", element);
}

//los arreglos proveen de un conjunto de métodos que utilizaremos con frecuencia
//El más simple: forEach
let family2 = ["Jose", "Nicolas", "Lucia", "Enrique"];
family2.forEach(function(value, index, array){
    //value es el elemento que se está procesando
    //index es el indice del elemento que se esta procesando
    //array el arreglo completo
    console.log(value, index, array);
});

//nos puede intersar solo trabajar con value
family2.forEach((value) => {
    console.log(value);
});

//.filter se utiliza para procesar arreglos y devolver uno con mas o menos elementos

let family3 = ["Jose", "Nicolas", "Lucia", "Enrique"];

//.filter recibe una función que evalúa por cada elemento del arreglo si es mayor a 5
const members = family.filter((member)=> {
    return member.length > 5;
});
console.log(members);

//otro elemento interesante y útil para React .map
//.map recibe una función - arrow function - como parámetro y retorna otro arreglo

let numbers = [1, 2, 3, 4, 5, 6, 7];
const doubles = numbers.map((element)=> {
    return element * 2;
});
console.log(doubles);

//Combinar métodos
//1 - usar .filter, se queda con los elementos impares
//2 - multiplicar por dos cada uno de los elementos

let numbers1 = [1, 2, 3, 4, 5, 6, 7];
const chain = numbers1.filter((element)=>{
    return element % 2 !== 0;
}).map((element) =>{
    return element * 2;
});
console.log(chain);

//destructiring: es una forma de asignar cada uno de los elementos de un arreglo a variables

let [one, two, three] = [1, 2, 3];
//one = 1
//two = 2
//three = 3

//igual al ejemplo previo
let fewNumbers = [1, 2, 3];
[one, two, three] = fewNumbers;

//y acá usando <spread syntax>
let [a, b, ...rest] = [1, 2, 3, 4, 5];
//a = 1
//b = 2
// c = [2, 4, 5]

const invertirStrings = (arreglo) => arreglo.map(str => str.split("").reverse().join(""));

const entrada = ['abc123', '456cde'];
const resultado = invertirStrings(entrada);

console.log(resultado); // Output: ['321cba', 'edc654']
