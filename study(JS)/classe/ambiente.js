/*
const livro = {
  nome: "React Native",
  editora: "Casa do Código",
  paginas: 185,
  anunciar: function () {
    console.log("O Raí indica o livro" + this.nome + "!") // tihs serve para pegar o valor de um objeto
  }
}

livro.anunciar()
*/

const livro = function (nome, editora, paginas) {
    // adicionando variáveis para guardar os valores dos parâmetros em objetos
    ;(gNome = nome), (gEditora = editora), (gPaginas = paginas)

    this.getNome = function () {
        // serve para pegar o valor do objeto no console log, o nome depôs do this pode ser oque vc quiser.
        return gNome
    }
    this.getEditora = function () {
        // serve para pegar o valor do objeto no console log, o nome depôs do this pode ser oque vc quiser.
        return gEditora
    }
    this.getPaginas = function () {
        // serve para pegar o valor do objeto no console log, o nome depôs do this pode ser oque vc quiser.
        return gPaginas
    }
}

const GraphQL = new livro("GraphQL", "Casa do Código", 143) // forma de adicionar um liv-ro nessa função, usando new nomeDaFunction(Aqui você passa os parâmetros como o parâmetro original pede, editora e paganais)

console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())

///////////////////////////////////////////////

// Esse código de baixo não vai funcionar pois a classe ainda não está declarada
/*
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()
*/

// A classe não é direcionada para o topo do código como a function, por isso só podemos usa-lá depois que ela for declarada

class Livro {
    constructor(nome, editora, paginas) {
        // para passar os parâmetros da classe, usa o constructor(parâmetros)
        // colocando "variáveis", na classe precisa colocar o this.nome = adicionaValorDaVariável
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    // colocando functions para interagir com a classe, mas com a classe não é necessário declarar que é uma function, apenas colocar o nome

    // OBS: dessa forma não precisa retornar o valor da função para guardar o valor

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(
            `${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`
        )
    }
}

// A partir daqui podemos usar as funções da classe, pois já esta declarada

// criando o livro NodeJS com o formato da classe
const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195) // passando os parâmetros como se fosse uma function

// forma de chamar a classe, nomeDaVariávelComOsDados.nomeDaFunctionParaInteragir
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

console.log(typeof Livro) //  mostra que classe é uma function pois é parecido

// forma de reutilizar valores da classe

class LivroColecao extends Livro {
    // colocou extends livro para extender com a classe Livro
    constructor(nome, nomeColecao) {
        super(nome) // super(parametroDaClasseExtendida), usado para pegar as configurações desse parâmetro
        this.nomeColecao = nomeColecao // se tivesse nomeColecao na classe livro, aqui seria super(nomeColecao), fazendo com que o super pegue as configurações desse parâmetro
    }

    descreverColecao() {
        console.log(
            `O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`
        )
    }
}

const LogicaDeProgramacao = new LivroColecao(
    "Lógica de Programação",
    "Comece a Programar"
)

LogicaDeProgramacao.descreverColecao()
