console.log("Hello World!");

var idade = 22;
var idade = "Vinte e dois";
console.log(idade);

let nome = "Ariel";
nome = "Eduardo";
nome = "Patrick";
console.log(nome);

const cargo = "Professor";
console.log(cargo);

// Exercício 3
const nome_ = "Ariel";
let idade_ = 22;

let mensagem = `Meu nome é ${nome_}, tenho ${idade_} anos.`;
let mensage = "Meu nome é" + nome + ", tenho " + idade + " anos.";

console.log(mensagem);

// Tipos primitivos
console.log(typeof nome_);
console.log(typeof idade_);

let maiorDeIdade = true;
let temFilhos = false;

let tamanho;
console.log(tamanho);

let vazio = null;
console.log(vazio)

// Exercício 3 - Tipos primitivos
let a = 10;
let b = "Ariel";
let c = "10";
let d = 20;

console.log("a + b", a + b);
console.log("a + c", a - c);
console.log("a + d", a + d);

let n1 = "42.5123";
n1 = Number(n1);
console.log(n1);

console.log(parseFloat("40.12Ae"));
console.log(Number("40.12Ae"));