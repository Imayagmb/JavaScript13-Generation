const leia = require('readline-sync');

let media = leia.questionFloat("Digite a media do aluno: ");

// if (media >= 7) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

if (media >=7) {
    console.log("Você está Aprovado");
}  else if (media >=5 && media <7) {
    console.log("Você está em Recuperação");
}  else {
    console.log("Você está Reprovado");
} 