const leia = require ("readline-sync");

let nome;
do {
    nome = leia.question("Digite o nome do doador: ");
 if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome));
 console.log("Nome inválido. Por favor, digite apenas letras.");
} while (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome));

let idade = leia.questionInt("Digite a idade do doador: ");

let primeiraDoacao = leia.question("Primeira doacao de sangue? (sim/Nao): ")=== true;
let apto= false;

if (idade >= 18 && idade <= 59) {
    apto = true;
} else if (idade >=60 && idade <= 69 && primeiraDoacao) {
    apto = true;
}

if (apto) {
    console.log(`O(A) doador ${nome}, com ${idade} anos, está APTO a doar sangue.`);
} else {
    console.log(`O(A) doador ${nome}, com ${idade} anos, NÃO está APTO a doar sangue.`);
}