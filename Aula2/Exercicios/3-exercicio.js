const readline = require("readline-sync");

let salarioBruto = parseFloat(readline.question("Salario Bruto: "));

let adicionalNoturno = parseFloat(readline.question("Adicional Noturno: "));

let horasExtras = parseFloat(readline.question("Horas Extras: "));

let descontos = parseFloat(readline.question("Descontos: "));

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Líquido: " + salarioLiquido.toFixed(2));

// ENTRADA                                 SAÍDA

// Salário Bruto: 2000.00          Salário Líquido: 2800.00
// Adicional Noturno: 500.00
// Horas Extras: 100.00
// Descontos: 200.00

// FÓRMULA UTILIZADA:
// SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS
