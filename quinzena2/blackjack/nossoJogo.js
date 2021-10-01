/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   const cartaUsuario = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} - pontuação ${cartaUsuario.valor + cartaUsuario2.valor}`)

   const cartaComputador = comprarCarta()
   const cartaComputador2 = comprarCarta()
   console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} - pontuação ${cartaComputador.valor + cartaComputador2.valor}`)

      if ((cartaUsuario.valor + cartaUsuario2.valor) > (cartaComputador.valor + cartaComputador2.valor)) {
         console.log("O usuário ganhou!")
      } else if ((cartaUsuario.valor + cartaUsuario2.valor) === (cartaComputador.valor + cartaComputador2.valor)) {
         console.log("Empate!")
      } else {
         console.log("O computador ganhou!") 
      }

} else {
   console.log("O jogo acabou")
}


