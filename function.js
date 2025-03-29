
//arrow function sin parámetros
const arrowf1 = () => {
    return "arrowf1 was invoked!";
};

//arrow con un parámetro
//los paréntesis no son necesarios
const arrowf2 = param => {
    return "this is the argument: " + param;
}

//arrow function con una sentencia no necesita llaves
//y tampoco es necesario el return

const arrow3 = (a, b) => a + b; 

function contarCaracteres(string){
    let cantidad = string.length; 
    return cantidad;
}

let cant = contarCaracteres("abc");
console.log(cant);

let arrowContar = (string) => {
    return string.length;
}
console.log(arrowContar("q"));

