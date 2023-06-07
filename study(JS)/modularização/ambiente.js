// Para funcionar o arquivo precisa ser considerado um módulo, fiz isso criando um arquivo .json pelo terminal powershell usando o comando npm init
// esse arquivo pode ser criado manualmente também, criando um arquivo .json com nome package.json
// no arquivo html, na hora de importar o arquivo .js, colocar antes do src o type="module"

/*
Esse é o código que deve contar no arquivo package.json
{
  "name": "calculadora-imc", // nome do projeto
  "version": "1.0.0", // versão pode ser 1
  "description": "Calculadora de IMC", // descrição do projeto
  "main": "ambiente.js", // nome do arquivo onde está o código main
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Raí Joia", // nome do author
  "license": "ISC", // licença
  "type": "module" // muda o tipo do arquivo para modulo, para conseguir fazer a modularização
}
*/

import { pessoa } from "./pessoa.js"; // adicionando a classe Pessoa usando esse código

// criar novo objeto a partir da class, instanciar
let pessoa1 = new pessoa('Edson Maia', 40, 84.5, 1.75) // nome, idade, peso, altura 
let pessoa2 = new pessoa('Maria', 66, 73.4, 1.63)
let pessoa3 = new pessoa('Ana', 20, 42.3, 1.41)
let pessoa4 = new pessoa('Bia',50, 98.7, 1.52)
let pessoa5 = new pessoa('Bia', 50, 98.7, 1.52)

// imprimi total das pessoas
console.log(pessoa.totalPessoas)

// imprimi a situação de cada pessoa
console.log("Situação " + pessoa1.classificaImc())
console.log("Situação " + pessoa2.classificaImc())
console.log("Situação " + pessoa3.classificaImc())
console.log("Situação " + pessoa4.classificaImc())
console.log("Situação " + pessoa5.classificaImc())

// imprimi cada especificação da pessoa 1
console.log("Nome " + pessoa1.nome)
console.log("Idade " + pessoa1.idade)
console.log("IMC " + pessoa1.imc)
console.log("Peso " + pessoa1.peso)

// mudando as especificações da pessoa 1 
pessoa1.nome = "Raí Joia"
pessoa1.idade = 39
pessoa1.peso = 80.0

// imprimindo a nova pessoa 1 
console.log("Nome " + pessoa1.nome)
console.log("Idade " + pessoa1.idade)
console.log("Peso " + pessoa1.peso)

// atribuir valores para os atributos de um objeto
//pessoa1._nome = 'Edson'
//pessoa1._idade = 40
//pessoa1._peso = 84.5
//pessoa1._altura = 1.75

//pessoa2._nome = 'Maria'
//pessoa2._idade = 66
//pessoa2._peso = 73.4
//pessoa2._altura = 1.63

// imprimindo cada pessoa como objeto
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

// imprimindo o calculicaImc de cada pessoa
console.log(pessoa1.calculaImc)
console.log(pessoa2.calculaImc)
console.log(pessoa3.calculaImc)
console.log(pessoa4.calculaImc)
