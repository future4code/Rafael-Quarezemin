// Exercícios de interpretação de código
// 1. a) recebe um numero do usuário e verifica se o número é par ou ímpar.
//       Se for par recebe: "Passou no teste." Se for ímpar recebe: "Não passou no teste."
// b) numeros pares
// c) números ímpares
// 
// 2. a) para saber o preço da fruta escolhida.
// b) 2.25
// c) 5
// 
// 3. a) guardando numa constante um número digitado pelo usuário.
// b) Esse número passou no teste. Daria um erro.
// c) Sim há um erro pois a variável mensagem está num escopo local.


// Exercícios de escrita de código

// 1. a) 
let pergundaIdade = Number(prompt("Qual a sua idade?"))
// b) já foi feito na letra a.
if (pergundaIdade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
// c) deu tudo certo!



// 2.

let turnoQueEstuda = prompt("Qual turno você estuda? digite M (matutino), V (Vespertino) ou N (Noturno)")

if (turnoQueEstuda === 'M') {
    console.log("Bom Dia!")
} else if (turnoQueEstuda === 'V') {
    console.log("Boa Tarde!")
} else
    console.log("Boa Noite!")



// 3.
let turnoQueEstuda2 = prompt("Qual turno você estuda? digite M (matutino), V (Vespertino) ou N (Noturno)")
switch (turnoQueEstuda2) {
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break        
}



// 4.

let generoDoFilme = prompt("Qual o gênero do filme que vão assistir?")
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoDoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
