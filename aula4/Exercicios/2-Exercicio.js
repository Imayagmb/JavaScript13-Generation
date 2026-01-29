const leia = require("readline-sync");

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = leia.questionInt(`Digite o ${i}º numero: `);

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("\nTotal de numeros pares:", pares);
console.log("Total de numeros ímpares:", impares);

console.table({ pares, impares });