let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0) { // p=0 para se caso não passar o valor de P, ele será considerado 0
  console.log('Engordou')
  this.peso += p // consigo aumentar o peso dele colocando valor do peso que eu quero que ele engorde no parâmetro
}}

amigo.engordar(2) // coloquei mais 2Kg em José, usando o função e o parâmetro engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
//console.log(amigo)