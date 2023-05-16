// condição aninhada 
// para pegar a hora do sistema criei uma variavel com nome agora para pegar o dia com new Data(), depois criei uma variavel com nome hora para pegar a hora com o comando agora.getHours()
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
  console.log(`Bom dia!`)
} else if (hora <= 18) {
  console.log(`Boa tarde!`)
} else {
  console.log (`boa noite!`)
}