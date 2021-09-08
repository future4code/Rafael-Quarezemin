/* Exercícios de Interpretação
1-  10
    10, 5

2-  10, 10, 10

3-  a variável 'p' pode ser alterada para: horasTrabalhadasNoDia
    a variável 't' pode ser alterada para: salarioDoDia
 */


// Exercícios de Escrita de código

// exercício 1
let nome
let idade

console.log (typeof nome)
console.log (typeof idade)

// Foi impresso 'undefined' e 'undefined' pois de fato ambas as variáveis estão ainda indefinidas.

nome = prompt ('Qual e seu nome?')
idade = prompt ('Qual a sua idade?')

console.log (typeof nome)
console.log (typeof idade)

// Foi impresso 'string' e 'string' pois a caixa de prompt sempre retorna strings.

console.log ('Olá', nome, ', você tem', idade, 'anos.')



// exercício 2
let futebol = prompt ('Você gosta de futebol? Sim ou Não?')
let volei = prompt ('Você gosta de volei? Sim ou Não')
let basquete = prompt ('Você gosta de basquete? Sim ou Não?')

console.log ('Você gosta de futebol? -', futebol)
console.log ('Você gosta de volei? -', volei)
console.log ('Você gosta de basquete? -', basquete)


// exercício 3
let a = 10
let b = 25

c = a
a = b
b = c

console.log ('O novo valor de a é', a)
console.log ('O novo valor de b é', b)


// Desafio

let numero1 = prompt ('Digite um número')
let numero2 = prompt ('Digite outro número')

numero1 = Number(numero1)
numero2 = Number(numero2)

console.log ('O primeiro número somado ao segundo número resulta em:', numero1 + numero2)
console.log ('O primeiro número multiplicado pelo segundo número resulta em:', numero1 * numero2)




