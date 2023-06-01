// variáveis
// escopo global, escopo local
// var (escopo global), let (dentro do bloco), const

// OBS: variável com valor fixo --> const
// OBS: variável com valores que podem ser alterados --> let

// VAR (Não é mais considerado uma boa prática usar var)
if(true) {
  var nome = "daniel" // Usando a variável var, temos escopo global podendo chamar fora do bloco declarado e também podemos mudar o valor de sua variável
  nome = "Raí"
}

console.log(nome)

// LET
if (true) {
  let name2 = "rodrigo" // Usando let, temos escopo local, podendo ser chamado apenas no bloco onde foi declarado e também podemos mudar o valor de sua variável
  name2 = "Lucas"
  console.log(name2) // escopo local funciona apenas assim, chamando no lugar de seu bloco {}
}

//console.log(name2) <-- Da erro porque o escopo é local, funcionando apenas no bloco onde é declarado, nesse caso o bloco do if

// CONST

const name3 = "pedro" // A variável const é de escopo local, igual ao let, podendo apenas ser chamada no local onde foi declarada

/*
if (true) {
  nome3 = "Gabriel" <-- A variável const não permiti mudar o valor de sua variável declarada
}
*/

console.log(name3)