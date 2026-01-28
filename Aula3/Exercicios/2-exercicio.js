const leia = require("readline-sync");

let numero = parseInt(leia.question("Digite um numero: "));

let tipoParImpar;
if (numero % 2 === 0) {
    tipoParImpar = "Par";
} else {
    tipoParImpar = "Impar";
}

let tipoSinal;
if (numero >0) {
    tipoSinal="positivo";
} else if (numero <0) {
    tipoSinal="negativo";
} else {
    tipoSinal="neutro";
}

console.log(`O numero ${numero} é ${tipoParImpar} e ${tipoSinal}.`);