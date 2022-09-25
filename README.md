<h1 align="center">
    <img src="./src/utils/assets/logo-nlw-esports.svg">
</h1>
<div align="center">
  <img src="https://media.giphy.com/media/xnee70dtKvagbNUJDf/giphy.gif" />
</div>
<h2>⛲ Sobre</h2>
<p>O find your DUO-server é uma API escrita em Node para servir tanto a página web quanto a aplicação mobile do find your DUO. A API é responsável por receber as requisições do front-end, fazer a Query no Banco de dados (inserir ou resgatar um valor), e devolver a resposta no formato JSON, para que o front-end possa consumir esses dados.</p>
<br>
<h2>🎯 Objetivo</h2>
<p>O objetivo ao construir o find your DUO-server foi entender na prática como é feita a conexão entre o servidor e o banco de dados, ou seja, como receber valores de uma requisição e aplicar no banco, e como resgatar dados do banco para disponibilizar em determinada rota.</p>
<br>
<h2>🛠️ Tecnologias e ferramentas/bibliotecas utilizadas</h2>
<ul>
  <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
  <li><a href="https://www.prisma.io/">Prisma ORM</a></li>
</ul>
<br>
<h2>💻 Como rodar o projeto</h2>
<ol>
    <li>Faça fork ou baixe o projeto em sua máquina</li>
    <li>Entre na pasta raíz do projeto, e execute o comando npm install no terminal, para baixar as dependências</li>
    <li>Rode o comando npm run dev, que irá subir o servidor localmente no seu computador, na porta 3333</li>
    <li>Pronto. O servidor já estará sendo executado no endereço http://localhost:3333. </li>
</ol>
<br>
<h2>🚊 Rotas e métodos</h2>
<ul>
    <li>Listar os jogos cadastrados na aplicação: Rota: /games | Método: GET </li>
    <li>Criar um anúncio em um jogo: Rota: /games/:gameId/ads | Método: POST</li>
    <li>Listar todos os anúncios de um jogo: Rota: /games/:gameId/ads | Método: GET</li>
    <li>Mostrar o Discord de um anúncio: Rota: /ads/adsId/discord | Método: GET</li>
</ul>
<br>
<br>
<p align="center">Made by Matheus Pazinati 🛸</p>