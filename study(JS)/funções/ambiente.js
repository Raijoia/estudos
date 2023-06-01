/* 

Função: Trecho de código que só é executado quando é chamado/invocado
    Tipos de funções:
    Função Void(Vazia)
    Função com Parâmetro(s)
    Função Return
    Função Arrow

*/

// OBS: Faça uma função para apenas uma tarefa

// Função Void(Vazia)

let valor = 20

function incrementa() {
    console.log("Estou dentro da função")
}

incrementa() // apenas chamar a função
console.log(valor)

// Função com Parâmetro(s)

function mostraNome(nomeDaPessoa) {
  console.log(`O nome da pessoa é ${nomeDaPessoa}.`)
}

mostraNome('Raí') // atribuindo o nome pelo parametro
mostraNome('Júlia')

// Função Return

function multiplicação(n1, n2) {
  let multiplicando = n1 * n2

  return multiplicando // retorna o valor
}

const multiplicando = multiplicação(5, 5) // valor fica guardado na variável por conta do return

console.log(multiplicando)

// Função Arrow

const divi = (numero1, numero2) => {
  const divisor = numero1 / numero2

  return divisor // return -> retorna o valor da função e colocando na variável que chama a função
}

const dividindo = divi(10, 5)

console.log(dividindo)

// ou também pode ser feita assim, e dessa forma eu n preciso colocar o return

const subtração = (numero1, numero2) => numero1 - numero2 // n precisa colocar o return para o valor ficar salvo na variável

console.log(subtração(10, 5))