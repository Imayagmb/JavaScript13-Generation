const leia = require("readline-sync");

let A = parseInt(leia.question("Digite o numero A: "));
let B = parseInt(leia.question("Digite o numero B: "));
let C = parseInt(leia.question("Digite o numero C: "));

let soma = A + B;

console.log(`${A} + ${B} = ${soma}`);

if (soma > C) {
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log("A Soma de A + B é Igual a C");
}


