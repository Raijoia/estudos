let num = [5 , 8, 2, 9, 3];
num[5] = 6;
// a ordem do push e sort influência bastante no resultado da array
num.push(7);
num.sort();


for (var c = 0; c <= num.length; c++) {
  console.log(num[c]);
}

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8)
console.log(`O valor 8 esta na posição ${pos}`);