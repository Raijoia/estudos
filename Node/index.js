// criar arquivo .json pro node com o comando npm init no terminal powerShell

// instalar a biblioteca express com o comando npm install express no terminal powerShell

// pegando a biblioteca express, no node
const express = require("express"); 

const app = express(); // atalho pra não precisar ficar escrevendo express().listen(). ou express().algumaCoisa().

// Dizendo para o express que o arquivo do post vai ser em .json
app.use(express.json())

// Query Params => informação mandada para o servidor pela URL, após o ? na URL. localhost:3000/usuarios?nome=Raí
// OBS: não pode ser informação sigilosa

// Route Params => mandar ou deletar coisas específicas no servidor
// OBS: Precisa avisar a rota que será usado o route params colocando /usuarios/: no código fonte. app.get('/usuarios/:nomeDaVariável', function(request, response)
// OBS: nome da variável pode ser qualquer uma, normalmente se coloca o nome do dado que o usuário pode mandar

// Request Body => { "name":"Raí", "age":17, "senha":"123" }
// OBS: o suário não vê, então pode conter informações sigilosas

/*  
Verbos HTTP

GET => Buscar informação no back-end
POST => Criar/Mandar informação no back-end
PUT/PATCH => Alterar/Atualizar informação no back-end // OBS: Quase sempre usar o PUT, usar o PATCH apenas quando for atualizar uma única informação no back-end
DELETE => Deletar informação no back-end

--------------------------------------------------------------------------------------------------------

Códigos HTTP
2xx => Confirmação / Sucesso
200 => Requisição realizada com sucesso
201 => Requisição de criação realizada com sucesso

4xx => Erro do cliente (front-end)
400 => Bad Request
401 => Unauthorized
403 => Forbidden (Proibido)
404 => Not Found (Não foi encontrado)

5xx => Erro no servidor (falha ao concluir solicitação)
500 => Internal server Error
502 => Bad Gateway
*/

const users = [{
  name:"Raí",
  age:17
}]

// Criando uma rota
app.get('/usuarios', function(request, response) {
  console.log(request.query);

  // Mudei todos os send pra json pra mostrar no arquivo json
  response.json(users);
}) // Acessando a rota colocando isso no navegador = http://localhost:3000/usuarios

// Criando uma rota do tipo POST
app.post('/usuarios', function(request, response) {
  console.log(request.body);

  // Guardando o novo usuário
  const newUser = request.body

  // Adicionando o usuário na array users
  users.push(newUser);

  // colocando pro usuário que foi criado e colocando status 201 pra confirmar que foi criado
  response.status(201).json(newUser);
})

// Criando uma rota do tipo delete
app.delete('/usuarios/:id', function(request, response) {
  console.log(request.params.id);

  // guardando o ID que vai ser deletado
  const id = request.params.id;

  // Deletando o ID. splice(numero na array, quantos é para deletar)
  users.splice(id, 1)

  response.send("Usuário deletado com sucesso");
})

// Criando/Colocando o servidor na biblioteca express
app.listen(3000, () => { //3000 é a porta onde o servidor vai rodar, pode ser qualquer uma
  console.log(`Meu servidor ta rodando.`)
});

// Pra rodar é só digitar node nomeDoArquivo.js no terminal powerShell

// Sempre que modificar algo no servidor ou no arquivo, tem que rodar o servidor denovo com o comando de cima 

// CTRL + C pra deixar de rodar o servidor 

// O nodemon faz com que o desenvolvedor não precise ficar fechando e abrindo o servidor a cada mudança

// Com o nodemon, muda a forma de inicar o servidor, tem que digitar no terminal poweShell npm run dev (coloca dev pois foi o nome atribuido ao comando no arquivo package.json)

// To rodando o front-end no insomnia
