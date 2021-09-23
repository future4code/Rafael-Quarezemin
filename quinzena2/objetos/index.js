// Exercícios de interpretação de código
// 1. a)Matheus Nachtergaele
//      Virginia Cavendish
//      canal: "Globo", horario: "14h"
// 
//  2. a)nome: "Juca", 
// 	    idade: 3, 
// 	    raca: "SRD"
// 
//      nome: "Juba", 
//      idade: 3, 
//      raca: "SRD"    
// 
//      nome: "Jubo", 
//      idade: 3, 
//      raca: "SRD" 
// 
//    b) é o spread. Ele copia as propriedades de um objeto para o novo objeto.
// 
// 3. a) false
//       undefined
// 
//    b) imprimiu false pois esse é o valor de backender. Imprimiu undefined pois não existe a propriedade altura. 
// 


// Exercícios de escrita de código
// 1. a)
const pessoa = {
    nome: "Thiago",
    apelidos: ["caixa d'agua", "cabeção", "funko pop"]
}

const mensagem = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou 
    ${pessoa.apelidos[2]}`) 
}  

mensagem(pessoa)

// b)
const pessoa2 = {
    ... pessoa,
    apelidos: ["apelido1", "apelido2", "apelido3"]
}

mensagem(pessoa2)

// 2. a)
const cadastro1 = {
    nome: "Rafael",
    idade: 36,
    profissão: "Estudante"
}
const cadastro2 = {
    nome: "Bruno",
    idade: 34,
    profissão: "Engenheiro"
}

// b)

const recebeObjetos = (cadastro1, cadastro2) => {
    
    return [cadastro1.nome, cadastro1.nome.length, cadastro1.idade, cadastro1.profissão, cadastro1.profissão.length]
}

console.log(recebeObjetos(cadastro1))
console.log(recebeObjetos(cadastro2))

// 3. a)
let carrinho = []

// b)
const fruta1 = {
    nome: "melancia",
    disponibilidade: true,
}
const fruta2 = {
    nome: "abacate",
    disponibilidade: true,
}
const fruta3 = {
    nome: "amora",
    disponibilidade: true,
}

// c)
let recebeObjetoFruta = (fruta1) => {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)

    return(carrinho)
}

// d)
console.log(recebeObjetoFruta(fruta1))


