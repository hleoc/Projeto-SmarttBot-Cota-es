const express = require('express');

const { api } = require('./apiConsumida');

const app = express();

app.use(express.json());

let arrayBitcoin = [];
const arrayBitcoinCandle = [];
let arrayMonero = [];
const arrayMoneroCandle = [];

setInterval(async () => {
  const bitcoin = await api('USDT_BTC');
  arrayBitcoin.push(bitcoin);
  if (arrayBitcoin.length % 6 === 0 && arrayBitcoin.length !== 0) {
    const newArray = arrayBitcoin.slice(arrayBitcoin.length - 6);
    arrayBitcoinCandle.push({
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

  if (arrayBitcoin.length % 30 === 0 && arrayBitcoin.length !== 0) {
    const newArray = arrayBitcoin.slice(arrayBitcoin.length - 30);
    arrayBitcoinCandle.push({
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

  if (arrayBitcoin.length % 60 === 0 && arrayBitcoin.length !== 0) {
    const newArray = arrayBitcoin.slice(arrayBitcoin.length - 60);
    arrayBitcoinCandle.push({
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
    arrayBitcoin = [];
  }
}, 10000);

setInterval(async () => {
  // const umMinuto = 6
  const monero = await api('USDT_XMR');
  arrayMonero.push(monero);
  if (arrayMonero.length % 6 === 0 && arrayMonero.length !== 0) {
    const newArray = arrayMonero.slice(arrayMonero.length - 6);
    arrayMoneroCandle.push({
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

  if (arrayMonero.length % 30 === 0 && arrayMonero.length !== 0) {
    const newArray = arrayMonero.slice(arrayMonero.length - 30);
    arrayMoneroCandle.push({
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

  if (arrayMonero.length % 60 === 0 && arrayMonero.length !== 0) {
    const newArray = arrayMonero.slice(arrayMonero.length - 60);
    arrayMoneroCandle.push({
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
    arrayMonero = [];
  }
}, 10000);

app.get('/', async (_req, res) => {
  res.status(200).json([...arrayBitcoinCandle, ...arrayMoneroCandle]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`A Smarttbot está ON na porta ${PORT}`);
});
