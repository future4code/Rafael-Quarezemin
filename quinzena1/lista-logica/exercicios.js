// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura do retângulo')
  const largura = prompt('Digite a largura do retângulo')

  console.log(Number(altura) * Number(largura))
  }

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano atual')
  const anoNascimento = prompt('Digite o ano que você nasceu')

  console.log(Number(anoAtual) - Number(anoNascimento))
}

// Exercício 3
function calculaIMC() {
  const peso = prompt('Digite o seu peso, em kg')
  const altura = prompt('Digite a sua altura, em metros')

  console.log(Number(peso) / ( Number(altura) * Number(altura)) )
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite sua cor favorita')
  const cor2 = prompt('Digite sua segunda cor favorita')
  const cor3 = prompt('Digite sua terceira cor favorita')

  const novoArray = [cor1, cor2, cor3]

  console.log(novoArray)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const animal = prompt('Qual seu animal favorito?')

  console.log(animal.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = prompt('Qual o custo de um, espetáculo de teatro?')
  const valorIngresso = prompt('Qual o valor de cada ingresso?')

  console.log(Number(custoEspetaculo) / Number(valorIngresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt('Qual seu animal favorito?')
  const string2 = prompt('Qual sua cor favorita?')

  console.log(string1.length === string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string3 = prompt('Qual seu animal favorito?')
  const string4 = prompt('Qual sua cor favorita?')

  console.log(string3.toUpperCase() === string4.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual1 = prompt('Qual o ano atual?')
  const anoNascimento1 = prompt('Qual seu ano de nascimento?')
  const anoEmissaoRG = prompt('Em qual ano sua carteira de identidade foi emitida?')

  const idadeAtual = anoAtual1 - anoNascimento1
  const renovacao = anoAtual1 - anoEmissaoRG

  const renova20 = (idadeAtual < 21 && renovacao > 4) 
  const renova20e50 = (idadeAtual > 20 && idadeAtual < 51) && renovacao > 9
  const renovaAcima50 = idadeAtual > 50 && renovacao > 14

  console.log(renova20 || renova20e50 || renovaAcima50)
}

// Exercício 11
function checaAnoBissexto() {
  const anoUsuario = Number(prompt('Digite um ano qualquer'))

  const bissexto = (anoUsuario % 400 === 0) || (anoUsuario % 4 === 0) && (anoUsuario % 100 !== 0)

  console.log(bissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let maisDe18 = prompt('Você tem mais de 18 anos? Sim ou Não?').toUpperCase()
  let ensinoMedioCompleto = prompt('Você possui ensino médio completo? Sim ou Não?').toUpperCase()
  let disponibilidadeExclusiva = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Sim ou Não?').toUpperCase()

  console.log((maisDe18 === 'SIM') && (ensinoMedioCompleto === 'SIM') && (disponibilidadeExclusiva === 'SIM'))
}