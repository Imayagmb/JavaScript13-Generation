const leia = require("readline-sync");

// Entrada
let nome = leia.question("Nome do colaborador: ");
let codigoCargo = leia.questionInt("Codigo do cargo: ");
let salario = leia.questionFloat("Salario: R$ ");

let cargo;
let percentual;

// SWITCH
switch (codigoCargo) {
    case 1:
        cargo = "Gerente";
        percentual = 0.10;
        break;

    case 2:
        cargo = "Vendedor";
        percentual = 0.07;
        break;

    case 3:
        cargo = "Supervisor";
        percentual = 0.09;
        break;

    case 4:
        cargo = "Motorista";
        percentual = 0.06;
        break;

    case 5:
        cargo = "Estoquista";
        percentual = 0.05;
        break;

    case 6:
        cargo = "Tecnico de TI";
        percentual = 0.08;
        break;

    default:
        console.log("Codigo de cargo invalido!");
        process.exit();
}

// Cálculo do novo salário
let novoSalario = salario + (percentual * salario);

// Saída
console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salario reajustado: R$ ${novoSalario.toFixed(2)}`);
