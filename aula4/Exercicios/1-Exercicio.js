const leia = require("readline-sync");

let primeiroNumero = leia.questionInt("Digite o primeiro numero do intervalo: ");
let ultimoNumero = leia.questionInt("Digite o ultimo numero do intervalo: ");

if (primeiroNumero >= ultimoNumero) {
    console.log("Intervalo inválido!");
} else {
    console.log(`\nNo Intervalo entre ${primeiroNumero} e ${ultimoNumero}:\n`);

    let encontrouMultiplo = false;

    for (let contador = primeiroNumero; contador <= ultimoNumero; contador++) {
        if (contador % 3 === 0 && contador % 5 === 0) {
            console.log(`${contador} é múltiplo de 3 e 5!`);

            encontrouMultiplo = true;
        }
    }

    if (!encontrouMultiplo) {
        console.log("Nenhum número múltiplo de 3 e 5 foi encontrado neste intervalo.");
    }
}