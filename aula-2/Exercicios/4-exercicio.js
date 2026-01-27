const readline = require("readline-sync");

let n1 = parseFloat(readline.question("numero1: "));
let n2 = parseFloat(readline.question("numero2: "));
let n3 = parseFloat(readline.question("numero3: "));
let n4 = parseFloat(readline.question("numero4: "));

let diferenca = (n1 * n2) - (n3 * n4);

console.log("Diferença: " + diferenca.toFixed(1));


// ENTRADA                         SAÍDA

// numero1: 5.0            Diferença: -26.0
// numero2: 6.0
// numero3: 7.0
// numero4: 8.0

// numero1: 5.0            Diferença: 86.0
// numero2: 6.0
// numero3: -7.0
// numero4: 8.0

//  CALCULO = (n1 * n2) – (n3 * n4)