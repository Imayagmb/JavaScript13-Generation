const leia = require("readline-sync");

let vetor = [];
let numero;
let posicao = -1;

for (let i = 0; i < 10; i++) {
  vetor[i] = leia.questionInt("Digite um numero: ");
}

numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numero) {
    posicao = i;
    break;
  }
}

if (posicao !== -1) {
  console.log("O numero " + numero + " esta localizado na posicao: " + posicao);
} else {
  console.log("O numero " + numero + " nao foi encontrado!");
}