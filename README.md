Boas vindas ao repositório do Projeto SmarttBot Cotações BACK-END!
Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv rocket

Cenário fictício

Dados os preços de execução (cotações) de uma criptomoeda reportados em tempo real
através de uma API pública, foi criado um sistema que processa estas cotações,
agregando-as em candlesticks (com os dados de abertura, máxima, mínima e fechamento) e salvando estes candles em um banco de dados.


Instruções para a instalação do projeto:
Crie uma pasta para onde o projeto será clonado

Clone o repositório
git clone git@github.com:hleoc/Projeto-SmarttBot-Cotacoes.git

Entre na pasta do repositório que você acabou de clonar:
cd Projeto-SmarttBot-Cotacoes

Instale as dependências
npm install

Start o banco de dados MySQL


Em uma aba do terminal rode o servidor do NodeJs
node index.js ou npm run dev

O que foi desenvolvido no back-end
Foi desenvolvida uma API utilizando a arquitetura RESTful!

Foram construidos candles de 1min, 5min e 10min. Os candles são salvos no
banco de dados uma vez que estejam completos. Por exemplo, a cada um minuto, o sistema irá salvar no banco de dados o último candle de 1min finalizado e assim por diante.

A API consumida foi a Poloniex Public API (mais especificamente o
comando returnTicker ou o canal websocket Ticker Data). Não foram utilizados clientes de
terceiros para consumir a API Poloniex.

Data de Entrega
O projeto tem até a seguinte data para ser entregue: 07/04/2021, quarta-feira, às 23h59.

Requisitos Obrigatórios:
O Projeto SmarttBot Cotações será realizado utilizando o MySQL como banco de dados.

Conexão com o Banco:
A conexão do banco local deverá conter os seguintes parâmetros:



O banco Poloniex possui uma tabela chamada Contações com sete Colunas: moeda, periodicidade, open, close, high, low e time.

O projeto deve rodar na porta 3000 no back-end.

Cobertura de testes unitários
Foram cobertos alguns recursos do código com testes unitários com Jest


Requisitos realizados




Tecnologias utilizadas
VSCode
JavaScript
React
NodeJS
MySQL
Postman
Git/Github
Arquitetura RESTful


Melhorias Futuras
Refatoração da linguagem de programação para Python;
Utilização do docker e docker-compose;

