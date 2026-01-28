const leia = require("readline-sync");

let numero = parseInt(leia.question("Digite um numero: "));

let tipoParImpar = numero % 2 === 0 ? "Par" : "Impar";

let tipoSinal =
    numero > 0 ? "positivo" :
    numero < 0 ? "negativo" :
    "neutro";

console.log(`O numero ${numero} é ${tipoParImpar} e ${tipoSinal}.`);