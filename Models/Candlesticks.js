const connection = require('./Connection');

const create = async ({ moeda, periodicidade, open, close, high, low, time }) => {
  const [
    createCandle,
  ] = await connection.execute(
    'INSERT INTO Cotações (moeda, periodicidade, open, close, high, low, time) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [moeda, periodicidade, open, close, high, low, time],
  );
  // console.log(createCandle);
  return createCandle;
};

const getAll = async () => {
  const [candles] = await connection.execute(
    'SELECT moeda, periodicidade, open, close, high, low, time FROM Cotações',
  );
  return candles;
};

module.exports = {
  create,
  getAll,
};
