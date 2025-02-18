// EXERCÍCIO 1
//FOR
// for (let contador = 1; contador <= 1000; contador++) {

//     console.log("Contagem: ", contador);

// }

// WHILE
// let contador = 1;
// while (contador <= 5) {

//     console.log("Contagem: ", contador);
//     contador++;

// }

// DO WHILE
// let mensagem = "";
// do {

//     mensagem = prompt("Digite um texto");

//     alert("Texto digitado: " + mensagem);

// } while (mensagem != "sair");

// console.log("Saiu!")

// EXERCÍCIO 2
let num = prompt("Insira um número: ");

for (let contador = 1; contador <= 10; contador++) {

    let valorCalculado = num * contador;

    let mensagem = `${num} x ${contador} = ${valorCalculado}`;

    console.log(mensagem);

}