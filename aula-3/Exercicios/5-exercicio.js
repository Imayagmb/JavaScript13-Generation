const leia = require("readline-sync");

// Entrada
let codigo = leia.questionInt("Codigo do Produto: (Entre 1 x 6) ");
let quantidade = leia.questionInt("Quantidade: ");

let produto;
let preco;

// SWITCH
switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;

    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;

    default:
        console.log("Codigo de produto invalido!");
        process.exit();
}

// Cálculo
let valorTotal = quantidade * preco;

// Saída
console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);