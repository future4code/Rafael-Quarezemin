// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// 
// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)
// 
// Resposta: Ele vai do zero ao 4, somando-os. o resultado será 10.
// 
// 2. Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) O que vai ser impresso no console?
// Resposta: 19, 21, 23, 25, 27, 30 
// 
// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se não, 
// o que poderia ser usado para fazer isso?
// Resposta: ACredito que seja suficiente sim.
// 
// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Resposta: *
//           **
//           ***
//           ****


// Exercícios de escrita de código

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde 
// esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

// a)
let quantosBichosEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))

if (quantosBichosEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} 

// b)
let nomesDosPets = []

if (quantosBichosEstimacao > 0) {
    for (let i = 0; i < quantosBichosEstimacao; i++) {
        let usuarioDigitaNomes = prompt("Quais os nomes dos seus animais?")
        nomesDosPets.push([usuarioDigitaNomes])
    }
}

// c)
console.log(nomesDosPets)


// 2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números.
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// a) Escreva um programa que **imprime** cada um dos valores do array original.
// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array 
// original e **imprima** esse novo array
// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do 
// índex `i` é: `numero`". Depois, **imprima** este novo array.
// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let arrayOriginal = [10, 25, 30, 45, 50, 65]
// a)
let imprimeValores = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i])
    }
}
imprimeValores()

// b)
let imprimeValoresDivididosPor10 = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log((arrayOriginal[i]) / 10)
    }
}
imprimeValoresDivididosPor10()

// c)
let imprimeValoresPares = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 ===0) {
        console.log(arrayOriginal[i])
        }
    }
}
imprimeValoresPares()

// d)
let novoImprimeValoresStrings = []

let imprimeValoresStrings = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        novoImprimeValoresStrings.push(`O elemento do índex ${[i]} é: ${arrayOriginal[i]}.`)
    }
}
imprimeValoresStrings()
console.log(novoImprimeValoresStrings)

// e)
const funcaoMaiorNumero = (arrayOriginal) => {
    let maiorNumero = -Infinity

    for (let numeroDaVez of arrayOriginal) {
        if (numeroDaVez > maiorNumero) {
            maiorNumero = numeroDaVez
        }
    }
    return maiorNumero
}

const funcaoMenorNumero = (arrayOriginal) => {
    let menorNumero = Infinity

    for (let numeroDaVez2 of arrayOriginal) {
        if (numeroDaVez2 < menorNumero) {
            menorNumero = numeroDaVez2
        }
    }
    return menorNumero
}
console.log(`O maior número é ${funcaoMaiorNumero(arrayOriginal)} e o menor é ${funcaoMenorNumero(arrayOriginal)}`)
