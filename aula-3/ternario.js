const leia = require("readline-sync");

 let idade = leia.questionInt("Digite sua idade: ");

console.log("Idade:", idade);

idade >= 18 ? console.log("Você é maior de idade") : console.log("Você é menor de idade");