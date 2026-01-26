const leia = require ("readline-sync")
let mensagem = leia.question("Digite uma mensagem: ");
// mensagem = "Cê é louco a turma é TOP DEMAIS!!!";
console.log(mensagem);

let numero1= leia.questionInt("Digite um numero: ");
let numero2= leia.questionInt("Digite outro numero: ");

let soma = numero1 + numero2;
console.log("A soma é: " + soma);   