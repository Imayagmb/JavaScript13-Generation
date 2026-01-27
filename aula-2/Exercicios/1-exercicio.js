const readline = require("readline-sync");

let salario = parseFloat(readline.question("Digite o salario: "));

let abono = parseFloat(readline.question("Digite o abono: "));

let novoSalario = salario + abono;

console.log("Novo Salario: " + novoSalario.toFixed(2));


// ENTRADA                     SAÍDA   
// Salário: 10000.00           Novo Salário: 11000.00
// Abono: 1000.00