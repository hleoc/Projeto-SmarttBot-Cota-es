const express = require('express');

const { api } = require('./apiConsumida');

const app = express();

app.use(express.json());

let arrayBitcoin = [];
const arrayBitcoinCandle = [];

let arrayMonero = [];
const arrayMoneroCandle = [];

const getCandle = async (array, arrayCandle, moeda, currencyPair) => {
  const currency = await api(currencyPair);
  array.push(currency);
  if (array.length % 6 === 0 && array.length !== 0) {
    const newArray = array.slice(array.length - 6);
    arrayCandle.push({
      moeda,
      periodicidade: '1 minuto',
      open: newArray[newArray.length - 6].last,
      close: newArray[newArray.length - 1].last,
      high: newArray.reduce(
        (maximo, atual) => Math.max(maximo, atual.last),
        Number.NEGATIVE_INFINITY,
      ),
      low: newArray.reduce(
        (minimo, atual) => Math.min(minimo, atual.last),
        Number.POSITIVE_INFINITY,
      ),
      time: newArray[newArray.length - 1].time,
    });
  }

  if (array.length % 30 === 0 && array.length !== 0) {
    const newArray = array.slice(array.length - 30);
    arrayCandle.push({
      moeda,
      periodicidade: '5 minutos',
      open: newArray[newArray.length - 30].last,
      close: newArray[newArray.length - 1].last,
      high: newArray.reduce(
        (maximo, atual) => Math.max(maximo, atual.last),
        Number.NEGATIVE_INFINITY,
      ),
      low: newArray.reduce(
        (minimo, atual) => Math.min(minimo, atual.last),
        Number.POSITIVE_INFINITY,
      ),
      time: newArray[newArray.length - 1].time,
    });
  }

  if (array.length % 60 === 0 && array.length !== 0) {
    const newArray = array.slice(array.length - 60);
    arrayCandle.push({
      moeda,
      periodicidade: '10 minutos',
      open: newArray[newArray.length - 60].last,
      close: newArray[newArray.length - 1].last,
      high: newArray.reduce(
        (maximo, atual) => Math.max(maximo, atual.last),
        Number.NEGATIVE_INFINITY,
      ),
      low: newArray.reduce(
        (minimo, atual) => Math.min(minimo, atual.last),
        Number.POSITIVE_INFINITY,
      ),
      time: newArray[newArray.length - 1].time,
    });
    array = [];
  }
};

setInterval(async () => {
  getCandle(arrayBitcoin, arrayBitcoinCandle, 'Bitcoin', 'USDT_BTC');
  getCandle(arrayMonero, arrayMoneroCandle, 'Monero', 'USDT_XMR');
}, 10000);

app.get('/', async (_req, res) => {
  res.status(200).json([...arrayBitcoinCandle, ...arrayMoneroCandle]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`A Smarttbot está ON na porta ${PORT}`);
});
