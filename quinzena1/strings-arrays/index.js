// Exercícios de interpretação de código
/* 1- 
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
 */

/* 2-
SUBI NUM ÔNIBUS EM MIRROCOS 27 
 */



// Exercícios de escrita de código

// 1- 
const nome = prompt('Qual o seu nome?')
const email = prompt('Qual o seu e-mail?')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)


// 2-
let comida = ['sorvete', 'macarrão', 'sushi', 'churrasco', 'salada']

console.log('a)', comida)

console.log(`b) Essas são as minhas comidas preferidas: 
${comida[0]}
${comida[1]}
${comida[2]} 
${comida[3]} 
${comida[4]}`)

let comidaUsuario = prompt('Qual sua comida favorita?')
comida[1] = comidaUsuario

console.log('c)', comida)

// 3-

const listaDeTarefas = []
const tarefa1 = prompt('Cite uma tarefa que tens que realizar no dia')
const tarefa2 = prompt('Cite outra tarefa que tenha que realizar no dia')
const tarefa3 = prompt('Cite mais uma tarefa que tenha que realizar no dia')

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

console.log(listaDeTarefas)

const indiceUsuario = prompt('Digite o índice de uma das tarefas que realizou: 0, 1 ou 2')

listaDeTarefas.splice(indiceUsuario, 1)

console.log(listaDeTarefas)


// Desafio
