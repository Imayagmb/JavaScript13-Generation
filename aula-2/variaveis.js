// console.log(bonus);

var nome = "Bruno";
let profissao = "Desenvolvedor";
let salarioBruto = 3500.90;
const bonus = 0.05;

console.log(bonus);

console.log("O tipo da variável é: ", typeof (nome));


if (salarioBruto > 3000) {
    let mensagem = "Salário alto!";
    console.log(mensagem);
    console.log(bonus);}


    // Let da mais segurança, pois só funciona no bloco onde foi criada.
// Var pode ser acessada em qualquer lugar do código, o que pode gerar erros inesperados.