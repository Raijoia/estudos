## Anotações

biblioteca express para colocar o servidor no ar pela porta do computador
OBS: Apenas seu computador consegue acessar essa porta

biblioteca nodemon para ficar atualizando o servidor a todo instante, sem precisar ficar fechando e iniciando o servidor sempre que houver uma mudança
OBS: Uso apenas para desenvolver o servidor, quando passar os arquivos do servidor para rodar na internet geral, o nodemon vai ser tirado do projeto

## Esse é o jeito de colocar o nodemon pra rodar
Colocar isso no arquivo package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  } 