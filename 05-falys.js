//short-circuit


// Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = 'AAA';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('soy function 1');
    return false
}

function fn2() {
    console.log('soy function 2');
    return true
}

let x = fn1() && fn2();