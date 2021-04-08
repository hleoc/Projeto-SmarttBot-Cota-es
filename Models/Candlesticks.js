const connection = require('./Connection');

const create = async ({ moeda, periodicidade, open, close, high, low, time }) => {
  const [
    createCandle,
  ] = await connection.execute(
    'INSERT INTO Cotações (moeda, periodicidade, open, close, high, low, time) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [moeda, periodicidade, open, close, high, low, time],
  );
  return createCandle;
};

const getAll = async () => {
  const [candles] = await connection.execute(
    'SELECT id, moeda, periodicidade, open, close, high, low, time FROM Cotações',
  );
  return candles;
};

const search = async ({ moeda, periodicidade, initialTime, lastTime }) => {
  const params = [];
  let sql = 'SELECT * FROM Cotações WHERE 1 = 1';
  if (moeda) {
    sql += ' and moeda = ?';
    params.push(moeda);
  }
  if (periodicidade) {
    sql += ' and periodicidade = ?';
    params.push(periodicidade);
  }
  if (initialTime) {
    sql += ' and time >= ?';
    params.push(initialTime);
  }
  if (lastTime) {
    sql += ' and time <= ?';
    params.push(lastTime);
  }
  const [pesquisa] = await connection.execute(sql, params);
  return pesquisa;
};

module.exports = {
  create,
  getAll,
  search,
};
