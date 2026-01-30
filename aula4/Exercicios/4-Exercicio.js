const leia = require("readline-sync");

let idade, genero, categoria;

let backend = 0;
let mulheresFrontend = 0;
let homensMobile40 = 0;
let naoBinarioFullstack30 = 0;

let totalPessoas = 0;
let somaIdades = 0;

let continua = true;

while (continua) {

  idade = leia.questionInt("Digite a idade: ");

  let genOpt = [
    "Mulher Cis",
    "Homem Cis",
    "Não Binário",
    "Mulher Trans",
    "Homem Trans",
    "Outros"
  ];

  genero = leia.keyInSelect(genOpt, "Selecione o genero:", { cancel: false }) + 1;

  let categoriaOpt = [
    "Backend",
    "Frontend",
    "Mobile",
    "Fullstack"
  ];

  categoria = leia.keyInSelect(categoriaOpt, "Selecione a categoria:", { cancel: false }) + 1;

  // Contagem geral
  totalPessoas++;
  somaIdades += idade;

  // Back
  if (categoria === 1) {
    backend++;
  }

  // Mulheres Cis (1) ou Trans (4) Frontend
  if ((genero === 1 || genero === 4) && categoria === 2) {
    mulheresFrontend++;
  }

  // Homens Cis (2) ou Trans (5) Mobile maiores de 40
  if ((genero === 2 || genero === 5) && categoria === 3 && idade > 40) {
    homensMobile40++;
  }

  // Não Binário Fullstack menores de 30
  if (genero === 3 && categoria === 4 && idade < 30) {
    naoBinarioFullstack30++;
  }

  continua = leia.keyInYN("Deseja continuar? ");
}

let mediaIdade = somaIdades / totalPessoas;

console.log("\nTotal de pessoas desenvolvedoras Backend:", backend);
console.log("Total de Mulheres Cis e Trans Frontend:", mulheresFrontend);
console.log("Total de Homens Cis e Trans Mobile maiores de 40:", homensMobile40);
console.log("Total de Não Binários Fullstack menores de 30:", naoBinarioFullstack30);
console.log("Total de pessoas que responderam:", totalPessoas);
console.log("Média de idade:", mediaIdade.toFixed(2));
