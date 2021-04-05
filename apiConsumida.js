const fetchNode = require('node-fetch');

const api = async (currencyPair) => {
  const resp = await fetchNode('https://poloniex.com/public?command=returnTicker')
    .then((resposta) => resposta.json())
    .catch((erro) => {
      console.error(`A chamada da API apresentou o seguinte erro ${erro}`);
      return {};
    });
  resp[currencyPair].time = new Date();
  return resp[currencyPair];
};

module.exports = {
  api,
};
