// Utilizamos expressões regulares(RegEx) para usar coisas dentro de um texto, podendo ser strings, tags, ou qualquer outra coisa

// Podemos usar também para validar coisas, como valores, e-mails e  etc...

// Flag --> g = global (encontra todas as ocorrências)
// Flag --> i = insensitive (encontra todas as forma que pode ser escrita joão, sem ligar para letras maiúsculas)

// Podemos criar grupos usando (), podemos ter também grupos dentro de grupos assim (())(())
// podemos colcocar 'ou' na expressão regular usando |, caso não houver, retornará Cannot read property '0' of null

// função regEx --> test - usada para testar se contém no texto ou valor oque você está pedindo, retornando true ou false
// função regEx --> exec - usado para pegar do texto o valor ou string pedida, caso não tiver, retorna null

// exportando o texto
const { texto } = require("./base.js")

const regExp1 = /João|Maria/gi // colocando entre barras é oque está pedindo para achar e o G diz a expressão regular que quero que ela encontre todos os João do e a I diz para procurar independente se está em maiúsculo ou minusculo

const regExp2 = /(Teve )(5 filhos)/
const found = regExp2.exec(texto)

console.log(regExp1.test(texto)) // chamando a regExp1 com a função test, para testar se tem joão no

//console.log(regExp2.exec(texto)); // chamando a regExp2 com a função exec, para pegar do texto o valor ou string pedida
console.log(found[0]) // o index 0 mostrará tudo que pediu do grupo, o 1 mostra o primeiro grupo e o 2 mostra o segundo grupo // simplificando o código de cima, e fazendo com que apareça apenas o valor ou texto pedido
console.log(found[1])
console.log(found[2])

if (regExp1) {
    console.log(regExp1.test(texto)) // continua o código caso nãe ache nenhuma das opções no 'ou'
}
