# Boas vindas ao repositório do Projeto SmarttBot Cotações BACK-END!
Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv 🚀


## Cenário fictício
Dados os preços de execução (cotações) de uma criptomoeda reportados em tempo real
através de uma API pública, foi criado um sistema que processa estas cotações,
agregando-as em candlesticks (com os dados de abertura, máxima, mínima e fechamento) e salvando estes candles em um banco de dados.


## Instruções para a instalação do projeto:
1. Crie uma pasta para onde o projeto será clonado

2. Clone o repositório
  * `git clone git@github.com:hleoc/Projeto-SmarttBot-Cotacoes.git`

3. Entre na pasta do repositório que você acabou de clonar
  * `cd Projeto-SmarttBot-Cotacoes`

4. Instale as dependências
  * `npm install`

5. Start o banco de dados MySQL para criar o banco de dados e a tabela
  * `Rode o script do arquivo script.sql no MySQL`

6. Configure um arquivo .env com as seguintes variáveis de ambiente
  MYSQL_USER=coloqueSeuUser
  MYSQL_PASSWORD=coloqueSeuPassword
  HOSTNAME=localhost
  NODE_ENV=test
 
 * Para rodar a aplicação no modo de teste coloque a variável NODE_ENV=test. Caso contrário o sistema adotará o modo de desenvolvimento. 

7. Em uma aba do terminal rode o servidor do NodeJs
  * `node index.js ou npm run dev`


## Instruções para testar o projeto:
- Abra um novo terminal e digite o comando
  * `npm test`
OBS: a aplicação deve estar rodando.


## O que foi desenvolvido no back-end
Foi desenvolvida uma API utilizando a arquitetura RESTful!

Foram construidos candles de 1 minuto, 5 minutos e 10 minutos. Os candles são salvos no
banco de dados uma vez que estejam completos. Por exemplo, a cada 1 minuto, o sistema irá agrupar 6 dados vindos da API Poloniex Public para gerar um candle de 1 minuto. Após, isso esse dado calculado será salvo no banco de dados.

A API consumida foi a Poloniex Public API (mais especificamente o
comando returnTicker ou o canal websocket Ticker Data). Não foram utilizados clientes de
terceiros para consumir a API Poloniex.

O projeto deve rodar na porta 3000 no back-end.


## Filtros disponíveis para uso
- Moeda
- Periodicidade
- Período inicial (InitialTime)
- Período final (LastTime)


## Opções disponíveis para os filtros
- Moeda:
* "Bitcoin", "Monero" ou "Litecoin"

- Periodicidade:
* "1 minuto", "5 minutos" ou "10 minutos"

- Períodos:
* Formato das datas a ser seguido: "YYYY-mm-dd HH:MM:SS"


## Data de Entrega
O projeto tem até a seguinte data para ser entregue: 07/04/2021, quarta-feira, às 23h59.


## Requisitos Obrigatórios:
O Projeto SmarttBot Cotações será realizado utilizando o MySQL como banco de dados.


## Cobertura de testes unitários
Foi coberto a resposta da consulta básica do bando de dados utilizando Jest, Frisby e Sequelize.
O Sequelize foi utilizado para permitir a manipulação do banco de dados para a realização dos testes.


## Tecnologias utilizadas
VSCode
JavaScript
React
NodeJS
MySQL Workbench
Postman
Git/Github
Arquitetura RESTful
ESLint
Sequelize


## Melhorias Futuras
Refatoração da linguagem de programação para Python;
Utilização do docker e docker-compose;
Refatoração da mesma solução utilizando websocket;
