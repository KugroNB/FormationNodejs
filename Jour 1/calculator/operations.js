function sum(x, y) {
    return x + y;
}

function substraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y ;
}

function division(x, y) {
    return x / y ;
}

function modulo(x, y) {
    return x % y ;
}

// on met les fonctions suivante a dispo pour 
// l'import dans un autre fichier
module.exports = {
    sum,
    substraction,
    multiplication,
    division,
    modulo
}