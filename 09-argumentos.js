// Parametro
function suma(a, b) {
    console.log(arguments);
    return a+b;
}

// argumentos
let resultado = suma(5, 6, 1, 2, 3, 4);
console.log(resultado);