const leia = require("readline-sync");

let idade;
let genero;
let area;
let continuar = "S";

let backend = 0;
let mulheresFrontend = 0;
let homensMobile40 = 0;
let naoBinariosFull30 = 0;

let totalPessoas = 0;
let somaIdades = 0;

while (continuar.toUpperCase() === "S") {

  idade = leia.questionInt("Idade: ");
  genero = leia.questionInt("Identidade de Genero: ");
  area = leia.questionInt("Pessoa Desenvolvedora: ");

  totalPessoas++;
  somaIdades += idade;

  if (area === 1) {
    backend++;
  }

  if ((genero === 1 || genero === 4) && area === 2) {
    mulheresFrontend++;
  }

  if ((genero === 2 || genero === 5) && area === 3 && idade > 40) {
    homensMobile40++;
  }

  if (genero === 3 && area === 4 && idade < 30) {
    naoBinariosFull30++;
  }

  continuar = leia.question("Deseja continuar (S/N): ");
}

let media = somaIdades / totalPessoas;

console.log("\nTotal de pessoas desenvolvedoras Backend: " + backend);
console.log("Total de Mulheres Cis e Trans desenvolvedoras Frontend: " + mulheresFrontend);
console.log("Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: " + homensMobile40);
console.log("Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: " + naoBinariosFull30);
console.log("O número total de pessoas que responderam à pesquisa: " + totalPessoas);
console.log("A média de idade das pessoas que responderam à pesquisa: " + media.toFixed(2));
