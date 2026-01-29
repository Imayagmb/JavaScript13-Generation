const leia = require("readline-sync");

let vetor = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
  vetor[i] = leia.questionInt("Digite o numero da posicao " + i + ": ");
  soma += vetor[i];
}

console.log("\nElementos nos indices impares:");
for (let i = 0; i < vetor.length; i++) {
  if (i % 2 !== 0) {
    console.log(vetor[i]);
  }
}

console.log("\nElementos pares:");
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    console.log(vetor[i]);
  }
}


let media = soma / vetor.length;

console.log("\nSoma: " + soma);
console.log("Media: " + media.toFixed(2));
