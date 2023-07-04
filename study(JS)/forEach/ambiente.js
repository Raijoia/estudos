// Pegando a classe navbar
const navBar = document.querySelector('.navbar');

// Pegando todas as li
const allLi = document.querySelectorAll('li');

// forEach serve para percorrer cada elemento de uma array, nesse caso, todos os elementos do allLi juntos formam uma array
// sempre retorna o item contido na array e o index dele (posição)
allLi.forEach((li, index) => {
  // Colocando um evento para ser acionado quando uma li for clicada, e adicionando uma função para ser executada quando for clicada
  li.addEventListener("click", e => {
    // Removendo a classe 'active-list' quando uma li for clicada
    navBar.querySelector('.active-list').classList.remove('active-list');
    // Adicionando a classe 'active-list' na li clicada
    li.classList.add('active-list');

    // Pegando a classe indicator
    const indicator = document.querySelector('.indicator')

    // Mudando a posição do indicator com base no index de onde ele esta e de onde ele deve ir
    indicator.style.transform = `translateX(calc(${index * 90}px))`
  });
});
