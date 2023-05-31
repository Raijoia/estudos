let valores = [8, 1, 7, 4, 2, 9]

/*
for(let pos=0; pos<valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


// usado apenas em arrays
for(let pos in valores) {
  console.log(valores[pos])
  console.log(pos)
}