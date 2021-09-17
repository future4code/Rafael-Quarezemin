/* // Execícios de interpretação de código

1-
a) 10 ; 50
b) não apareceria nada

2-
a) a função imprime no console o texto inserido pelo usuário, convertendo-o para letras minúsculas e 
questionando se no texto está incluída a palavra cenoura, retornando um booleano.
b)
i. true
ii. true
iii. true
 */


// Execícios de escrita de código

// 1-
// a)
let frase = () => {

let nome = 'Rafael'
let idade = 36
let moradia = 'Campo Grande/MS'
let profissao = 'estudante'

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${moradia} e sou ${profissao}.`)
}

// b)
let frase = (nome2, idade2, cidade, profissao2) => {

    return(`Eu sou ${nome2}, tenho ${idade2} anos, moro em ${cidade} e sou ${profissao2}.`)
}


// 2-
// a)
let soma = (numero1, numero2) => {
    const resultado = (numero1) + (numero2)
    return(resultado)
}

console.log(soma(5, 8)) */

// b)
let primeiroMaiorQueSegundo = (numero3, numero4) => {
    const resultado = numero3 >= numero4
    return(resultado)
}

// c)
let numeroEhPar = (numero5) => {
    const resultado = numero5 % 2 === 0
    return(resultado)
}

// d)
let tamanhoMaiscula = (qualquerMensagem) => {
    const tamanho = qualquerMensagem.length
    const mensagemMaiuscula = qualquerMensagem.toUpperCase()

    console.log(tamanho , mensagemMaiuscula)
}

// 3-
let funcaoSoma = (numero1DoUsuario, numero2DoUsuario) => {
    return(numero1DoUsuario + numero2DoUsuario)
}
let funcaoSubtracao = (numero1DoUsuario, numero2DoUsuario) => {
    return(numero1DoUsuario - numero2DoUsuario)
}
let funcaoMultiplicacao = (numero1DoUsuario, numero2DoUsuario) => {
    return(numero1DoUsuario * numero2DoUsuario)
}
let funcaoDivisao = (numero1DoUsuario, numero2DoUsuario) => {
    return(numero1DoUsuario / numero2DoUsuario)
}

let primeiroNumero = Number(prompt('Insira um número'))
let segundoNumero = Number(prompt('Insira outro número'))

console.log(funcaoSoma(primeiroNumero, segundoNumero))
console.log(funcaoSubtracao(primeiroNumero, segundoNumero))
console.log(funcaoMultiplicacao(primeiroNumero, segundoNumero))
console.log(funcaoDivisao(primeiroNumero, segundoNumero))