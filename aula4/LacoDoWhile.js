const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero inteiro: ");

let contador =1;

do {

        console.log(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
}   while (contador <= 10)

    // Faz o mesmo que o while, porem a diferenca e que o do while executa o bloco de codigo
    // FAZ PRIMEIRO E TESTA DEPOIS, OU SEJA, ELE SEMPRE EXECUTA AO MENOS UMA VEZ.