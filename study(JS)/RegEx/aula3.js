// exportando o texto
const { texto, arquivos } = require("./base.js")

/*

Quantificadores:
* (opcionais) a letra pode repetir 0 ou mais vezes 
+ (opcionais) a letra pode repetir 1 ou mais vezes 
? (opcionais) a letra pode repetir 0 ou 1 vez


\ Caractere de escape, usada antes de colocar algo que possa ser uma função ou quantificador


{numero de quantas vezes pode aparecer, numero máximo de vezes que pode aparecer}
* = {0, }
+ = {1, }
? = {0, 1}

*/

console.log(texto);

const regExp1 = /Jo+ão+/gi // tem que ser a direita da letra 

console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi // para pegar os jpg e jpeg

// const exemplo = /\.jpe{0, 1}g/gi // mostrando como seria com as {}

for (const arquivo of arquivos) {
  // mostrar apenas os arquivos validos
  const valido = arquivo.match(regExp2);

  if(!valido) continue;

  console.log(arquivo, valido);
}