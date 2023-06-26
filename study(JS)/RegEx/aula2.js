// função match --> usada para achar uma string, numero ou valor dentro de um texto

// função replace --> usada para trocar uma string, numero ou valor dentro de um texto

// exportando o texto
const { texto } = require("./base.js")

// declarando o regex
const regExp1 = /João|Maria/ig; // procurando jão ou maria dentro do texto

console.log(texto)
console.log(texto.match(regExp1)); // achando o pedido pela variável
console.log(texto.replace(/(João|Maria)/gi, '"$1"')); // trocando oque foi pedido
// usamos $1 para dizer que é para trocar pelos valores do grupo 1, se fosse o grupo 2, usaria $2



// podemos tbm criar uma função
console.log(texto.replace(/(João|Maria)/gi, function(input){
  return input.toUpperCase();
})); // essa função pega João ou Maria, e coloca eles em letra maiúscula 
// OBS: Isso é muito usado