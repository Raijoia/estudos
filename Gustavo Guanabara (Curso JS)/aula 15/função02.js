// na function soma coloquei que se caso o parâmetro n1 ou n2 n tiver valor, o valor default dele será 0, para n ocorrer erro caso houver apenas um parâmetro
function soma(n1=0, n2=0) {
  return n1 + n2;
}

console.log(soma(2, 5));