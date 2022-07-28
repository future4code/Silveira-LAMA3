<p>
<a href="#sobre">Sobre</a> |
<a href="#tecnologia">Tecnologia</a> |
<a href="#link">Link da API</a> |
<a href="#documentação">Documentação</a> |
<a href="#orientacoes">Orientações</a> |
<a href="#features">Features</a> |
<a href="#back">Rodando o back-end</a> |
<a href="#desenvolvedores">Desenvolvedores</a>
</p>

<h1 id="sobre">📕 Projeto Music Awards</h1>

Uma API REST para um festival de música em um fim de semana. Nessa API, podemos cadastrar um usuário, uma banda e um show. O projeto conta com **autenticação JWT** e **Hash de senha**, além de **testes unitários**. A API foi desenvolvida utilizado as tecnologias **TYPESCRIPT, NODE.JS, EXPRESS.JS, MYSQL** como banco de dados e **JEST** para testes unitários. Além disso, o projeto foi estruturado utilizando 
**PROGRAMAÇÃO ORIENTADA A OBJETOS(POO)** e princípios **S.O.L.I.D.**

<h2 id="tecnologia">🛠 Tecnologias</h2>

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/docs/)
- [Jest](https://jestjs.io/pt-BR/docs/api)
- [MySql](https://dev.mysql.com/doc/)

<h2 id="link">🔗 Link base da API</h2>

#### https://labenu-music-awards-idp.herokuapp.com

<h2 id="documentação">📃 Documentação</h2>

- Na documentação você encontra todas informações sobre como usar cada endpoint da API. Você pode clicar em "Run in Postman" para testar os endpoints na versão web do postman.
- [Documentação](https://documenter.getpostman.com/view/20351643/UzQvtk4N)
- Você tambem pode usar o arquivo JSON  com os endPonins se tiver o postman instalado na sua máquina.
- [POSTMAN](https://www.postman.com/downloads/)
- [Labenu-Music-Awards-IDP.postman_collection.json](https://github.com/AdeirMoreira/Projeto-Music-Awards/blob/master/Labenu-Music-Awards-IDP.postman_collection.json)

<h2 id="orientacoes">🚨 Orientações para acesso</h2>

- Realizar o login se já possui um cadastro;
- Realizar o cadastro com nome, email e senha se não possuir cadastro.
- Realiza o cadastro de bandas e shows.
- Realiza a visualização de detalhes da banda e show.

<h2 id="documentação">📃 Documentação do Postman</h2>

- [Postman](https://documenter.getpostman.com/view/20351643/UzQvtk4N)

<h2 id="features">✔️ Features</h2>

👤 Login/Cadastro

- [x] O nosso sistema deve permitir o registro aos usuários que irão usá-lo. Para se cadastrar, é necessário passar um email, um nome e uma senha, e também uma função dentro do sistema. Você pode ser um cliente (usuário normal) ou um administrador do sistema (admin). O usuário deve poder se logar automaticamente após o cadastro.
- [x] Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário.

🎙 Registrar banda

- [x] O nosso sistema deve deixar registrado todas as bandas que participarão dos três dias de shows. Para uma banda ser criada, precisamos das informações: nome, gênero musical principal a qual ela se identifica e o nome de um responsável (que pode ser qualquer membro dela). Não podem existir duas bandas com o mesmo nome. Somente administradores podem registrar bandas.

🎸 Detalhes banda

- [x] Deve receber o id ou o nome da banda e retornar todas as informações salvas sobre ela.

📅 Adicionar show

- [x] Para cadastrar um show, o endpoint precisa do id da banda, o dia (sexta, sábado ou domingo) e o horário em que ela irá se apresentar. Existe uma validação para indicar se o horário é válido (ou seja, se está entre 08h e 23h). Além disso os shows só podem ser marcados em horários redondos, ou seja, pode ser 08h - 09h ou 09h - 13h mas não pode ser 09h - 10h30 ou 10h30 - 14h. Caso já exista um show marcado para o dia e o horário em questão, o ndpoint retorna um erro indicando o horário do show em conflito.

🔍 Data e shows

- [x] Recebe um dia (sexta, sábado ou domingo) e retorna todos os shows daquela data (ordenados pelo horário), mostrando somente o nome da banda e o gênero musical principal e o horário de início e fim dos shows do dia.

<h2 id="back"> 🎲 Rodando o Back End (servidor)</h2>

### Pre-Requisitos

- Para rodar o projeto você vai precisar do [Node.JS](https://nodejs.org/en/download/),
- Uma instancia de um banco de dados MySQL
- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Como instalar e Rodar
* Para baixar o projeto
```
1. git clone https://github.com/AdeirMoreira/Projeto-Music-Awards.git
2. cd Projeto-Music-Awards
```
* Para instalar e rodar o projeto
```
3. npm install
4. npm dev
    ou
3. yarn install
4. yarn dev
```
* Para rodar os testes 
```
5. npm test
5. yarn test
```

Renomeie o arquivo ```.env.example```  para ```.env``` e preencha as variáveis com seus dados do banco de dados MySQL. É muito importante para a execução do servidor.

<h2 id="desenvolvedores">👨‍💻 Desenvolvedores</h2>
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br /> 
<td><a href="https://github.com/future4code/silveira-Eric-Silva"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99001809?v=4" width="100px;" alt="Imagem profile Eric Silva desenvolvedor"/><br /><sub><b>Eric Silva </b></sub></a><br />
<td><a href="https://github.com/future4code/silveira-Mariana-Lima"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98923335?v=4" width="100px;" alt="Imagem profile Mariana Lima desenvolvedora"/><br /><sub><b>Mariana Lima</b></sub></a><br />
  
</table>

<a href="#voltar">Voltar para o topo ⬆️</a>
