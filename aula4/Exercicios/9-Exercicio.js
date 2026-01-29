const leia = require("readline-sync");

let matriz = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = leia.questionInt("Digite um numero: ");
  }
}

console.log("Elementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
  process.stdout.write(matriz[i][i] + " ");
  somaPrincipal += matriz[i][i];
}

console.log("\n\nElementos da Diagonal Secundaria:");
for (let i = 0; i < 3; i++) {
  process.stdout.write(matriz[i][2 - i] + " ");
  somaSecundaria += matriz[i][2 - i];
}

console.log("\n\nSoma dos Elementos da Diagonal Principal:");
console.log(somaPrincipal);

console.log("\nSoma dos Elementos da Diagonal Secundaria:");
console.log(somaSecundaria);
