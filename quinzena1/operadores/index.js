// Exercícios de Interpretação
// 1- a.false; b.false; c.true; d.boolean 
// 2- será impresso a concatenação dos dois números digitados. Para corrigir tem que converter para número 'Number()'.
/* 3-
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma)
 */


// Exercícios de escrita de código

// 1-
let idadeUsuario = Number(prompt('Qual a sua idade?'))
let idadeAmigoUsuario = Number(prompt('Qual a idade da sua melhor amiga ou do seu melhor amigo?'))
let diferencaIdade = idadeUsuario - idadeAmigoUsuario

console.log('Sua idade é maior do que a do seu melhor amigo?', idadeUsuario > idadeAmigoUsuario)
console.log('A diferença de idade é de', diferencaIdade, 'anos')

// 2-
let numeroPar = Number(prompt('Digite um número par'))

console.log(numeroPar % 2)
// c) o resultado sempre é zero.
// d) o resultado sempre é um.

// 3- 
let idadeUsuario2 = Number(prompt('Qual a sua idade em anos?'))
console.log('a) Sua idade em meses é de:', idadeUsuario2 * 12, 'meses')
console.log('b) Sua idade em dias é de:', idadeUsuario2 * 365, 'dias')
console.log('c) Sua idade em horas é de:', idadeUsuario2 * 8760, 'horas')

// 4-
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

console.log(primeiroNumero)
console.log(segundoNumero)

console.log('O primeiro número é maior que o segundo?', primeiroNumero > segundoNumero)
console.log('O primeiro número é igual que o segundo?', primeiroNumero === segundoNumero)
console.log('O primeiro número é divisível pelo segundo?', (primeiroNumero % segundoNumero) === 0)
console.log('O segundo número é divisível pelo primeiro?', (segundoNumero % primeiroNumero) === 0)


// Desafios
// Farei o desafio no final de semana.







