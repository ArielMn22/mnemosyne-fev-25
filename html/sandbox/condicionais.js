// Exercício 1
// let num = prompt("Digite um número:");

// if (num > 0) {

//     console.log("Positivo.");

// } else if (num < 0) {

//     console.log("Negativo.");

// } else {

//     console.log("É zero.")

// }

// Exercício 2
// let num = prompt("Digite um número:");

// if (num % 2 == 0) {

//     console.log("É par.")

// } else {

//     console.log("É ímpar.")

// }

// let idade = 15;

// if (idade >= 13 && idade <= 17) {

//     console.log("Adolescente.");

// }

// INTERMEDIÁRIO
// Exercício 1
// let num1 = parseFloat(prompt("Insira o primeiro número:"));
// let num2 = parseFloat(prompt("Insira outro número:"));
// let operacao = prompt("Insira a operação. Ex: +, -, *, /.");

// let resultado = null;

// switch (operacao) {
//   case "+":

//     resultado = num1 + num2;

//     break;

//   case "-":

//     resultado = num1 - num2;

//     break;

//   case "*":

//     resultado = num1 * num2;

//     break;

//   case "/":

//     if (num2 == 0) {
//         console.log("Você não pode dividir um número por zero.");
//     } else {
//         resultado = num1 / num2;
//         console.log("resultado", resultado);
//     }

//     break;

//   default:

//     console.log("Operador inválido.");

//     break;
// }

// if (operacao != "/") {

//   console.log("resultado", resultado);

// }

// EXERCÍCIO 2
// let num1 = parseFloat(prompt("Insira o primeiro número:"));
// let num2 = parseFloat(prompt("Insira o segundo número:"));
// let num3 = parseFloat(prompt("Insira o terceiro número: "));

// if (num1 > num2 && num1 > num3) {

//   console.log("Número maior é o:", num1);

// } else {

//   if (num2 > num1 && num2 > num3) {

//     console.log("Número maior é o:", num2);

//   } else {

//     if (num3 > num1 && num3 > num2) {

//       console.log("Número maior é o: ", num3);

//     }

//   }

// }

// AVANÇADOS
// Exercício 4
// let ano = parseInt(prompt("Insira um ano: "));

// if (ano % 4 == 0) {

//     console.log("É bissexto.");

// } else {

//     if (ano % 400 == 0) {

//         console.log("É bissexto.");

//     } else {

//         console.log("Não é bissexto.");

//     }

// }

// const idade = 18;

// if (idade < 18) {
//   console.log("Menor de idade");
// } else if (idade === 18) {
//   console.log("Acabou de atingir a maioridade");
// } else {
//   console.log("Maior de idade");
// }

// if (idade < 18) {
//     console.log("Menor de idade");
// } else {
//     if (idade === 18) {
//         console.log("Acabou de atingir a maioridade");
//     } else {
//         console.log("Maior de idade");
//     }
// }