// EXERCÍCIO 1
//FOR
function exercicioRep01 () {

    for (let contador = 1; contador <= 10; contador++) {

        console.log("Contagem: ", contador);
    
    }

    let divDeLogs = document.querySelector(".logs"); // Busca um elemento da tela.

    let paragrafo = document.createElement("p");

    paragrafo.innerHTML = "Exercício 01 de repetição executado, confira o console.";

    divDeLogs.appendChild(paragrafo);

}

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
// let num = prompt("Insira um número: ");

// for (let contador = 1; contador <= 10; contador++) {

//     let valorCalculado = num * contador;

//     let mensagem = `${num} x ${contador} = ${valorCalculado}`;

//     console.log(mensagem);

// }

// INTERMEDIARIO

// EXERCICIO 2
// let numeroAleatorio = Math.floor(Math.random() * 100);

// let chute = null;

// while (chute != numeroAleatorio) {

//     chute = parseInt(prompt("Chute um número:"));

//     if (chute != numeroAleatorio) {

//         if (chute > numeroAleatorio) {
    
//             alert("Chutou alto.");
    
//         } else {
    
//             alert("Chutou baixo.");
    
//         }

//     }

// }

// alert("Você acertou!");