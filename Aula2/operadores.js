let salarioBruto = 3500.90;
const bonus = 0.05;

console.log ("Salário Liquido: ", 
    new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
    }).format(salarioBruto + (bonus * salarioBruto))); 



// +	Soma
// -	Subtração	
// *	Multiplicação	
// /	Divisão	
// **	Potenciação	x ** 2
// Eleva o valor da variável x ao quadrado, ou seja, multiplica x por ele mesmo (x * x)
// %	Módulo ou Resto	x%2
// Se tiver resto na divisão o resultado será 1
// Se não tiver resto na divisão o resultado será 0

// Operador	Operação	Prioridade
//     /	Divisão	        2
//     *	Multiplicação	2
//     +	Soma	        3
//     -	Subtração	    3

