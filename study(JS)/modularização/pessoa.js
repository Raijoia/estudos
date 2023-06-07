// Nome do arquivo tem que ser igual o nome da classe 

// coloca export antes de iniciar a classe parar permitir que essa classe possa ser importada para outro arquivo
export class pessoa {
   // atributos = variáveis ou características
   _nome // tipo String
   _idade // tipo Integer
   _peso // tipo Float ou Real
   _altura // tipo Float ou Real
   _imc
   static totalPessoas = 0 // atribuindo estático ou da class

   // métodos = funções ou comportamentos

   //método constructor
   constructor (nome, idade, peso, altura) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
    this._imc = this._peso / (this._altura * this._altura)
    pessoa.totalPessoas += 1 // contador com incremento
   }

   // set imc
   calculaImc() {
    return (this._peso / (this._altura * this._altura)).toFixed(2)
   }

   // classificar imc
   classificaImc() {
    let valorImc = (this.imc).toFixed(2)
    let classificacao = ''

    if(valorImc < 18.5) {
      classificacao = 'Abaixo do peso'
    } else if (valorImc <= 24.9) {
      classificacao = 'Peso normal'
    } else if (valorImc <= 29.9) {
      classificacao = 'Sobrepeso'
    } else if (valorImc <= 34.9) {
      classificacao = 'Obesidade grau I'
    } else if (valorImc <= 39.9) {
      classificacao = 'Obesidade grau II'
    } else if (valorImc <= 40) {
      classificacao = 'Obesidade grau II ou Mórbida'
    } else {
      classificacao = 'Peso inválido'
    }
    return classificacao
   }

   // get = pegar
   get nome() {
    return this._nome
   }

   get idade() {
    return this._idade
   }

   get peso() {
    return this._peso
   }

   get altura() {
    return this._altura
   }

   get imc() {
    return this._imc
   }

   get totalPessoas() {
    return Pessoa.totalPessoas
   }

   // set = configurar, editar, alterar
   set nome(novoNome) {
    this._nome = novoNome
   }

   set idade(novaIdade) {
    this._idade = novaIdade
   }

   set peso(novoPeso) {
    this._peso = novoPeso
   }

   set altura(novaAltura) {
    this._altura = novaAltura
   }

} // fim da class pessoa