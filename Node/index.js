// criar arquivo .json pro node com o comando npm init no terminal powerShell

// instalar a biblioteca express com o comando npm install express no terminal powerShell

// pegando a biblioteca express, no node
const express = require("express"); 

const app = express(); // atalho pra não precisar ficar escrevendo express().listen(). ou express().algumaCoisa().

// Criando uma rota
app.get('/usuarios', function(request, response) {
  response.send('Olá usuários');
}) // Acessando a rota colocando isso no navegador = http://localhost:3000/usuarios

// Criando/Colocando o servidor na biblioteca express
app.listen(3000, () => { //3000 é a porta onde o servidor vai rodar, pode ser qualquer uma
  console.log(`Meu servidor ta rodando.`)
});

// Pra rodar é só digitar node nomeDoArquivo.js no terminal powerShell

// Sempre que modificar algo no servidor ou no arquivo, tem que rodar o servidor denovo com o comando de cima 

// CTRL + C pra deixar de rodar o servidor 

// O nodemon faz com que o desenvolvedor não precise ficar fechando e abrindo o servidor a cada mudança

// Com o nodemon, muda a forma de inicar o servidor, tem que digitar no terminal poweShell npm run dev (coloca dev pois foi o nome atribuido ao comando no arquivo package.json)
