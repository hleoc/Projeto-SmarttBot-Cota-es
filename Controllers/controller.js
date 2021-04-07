const { Router } = require('express');

const model = require('../Models/Candlesticks');

const candle = Router();

candle.get('/', async (_req, res) => {
  try {
    const allCandles = await model.getAll();
    return res.status(200).json({ allCandles });
  } catch (error) {
    return res.status(500).json({ message: 'Algo está errado.' });
  }
});

candle.get('/search', async (req, res) => {
  try {
    const { moeda, periodicidade, initialTime, lastTime } = req.query;
    const filter = await model.search({
      moeda,
      periodicidade,
      initialTime,
      lastTime,
    });
    return res.status(200).json(filter);
  } catch (error) {
    return res.status(500).json({ message: 'Algo está errado.' });
  }
});

module.exports = candle;
