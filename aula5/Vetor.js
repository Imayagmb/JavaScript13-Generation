const leia = require("readline-sync")

let numeros = [10, 25, 5, 45, 85, 95];

let cores = Array(5);

for (let indice = 0; indice < numeros.length; indice ++){
    console.log(`numeros[${indice}] = ${numeros[indice]}`);
}

console.log(`O tamanho do vetor numeros é: ${numeros.length}`)

console.table(numeros);

for (let indice = 0; indice < cores.length; indice ++){
    cores[indice] = leia.question("Digite o nome de uma cor: ");
}

console.table(cores);

console.table(numeros.sort((a, b) => b - a));

console.table(cores.sort());

console.log("Qual é a posição do elemento 5 no vetor numeros? ", numeros.indexOf(5))

// FOR: Numero que começa; condição de parada; o que ocorre no final do loop.
 
// VETOR: o primeiro indicie começa em 0, ou seja:
// Se quer que escreva 10 dígitos ele escreve de 0 a 9