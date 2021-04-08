const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('Sua aplicação deve ter o endpoint GET `/getCandles`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
    shell.exec('npx sequelize-cli db:seed:all $');
  });

  it('Será validado que é possível listar requisitar as candles', async () => {
    await frisby
      .get(`${url}/getCandles`)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        const allCandles = result.allCandles;
        expect(allCandles[0].moeda).toBe('Bitcoin');
        expect(allCandles[0].periodicidade).toBe('1 minuto');
        expect(allCandles[0].open).not.toBeNull();
        expect(allCandles[0].close).not.toBeNull();
        expect(allCandles[0].high).not.toBeNull();
        expect(allCandles[0].low).not.toBeNull();
        expect(allCandles[0].time).not.toBeNull();
        expect(allCandles[1].moeda).toBe('Monero');
        expect(allCandles[1].periodicidade).toBe('1 minuto');
        expect(allCandles[1].open).not.toBeNull();
        expect(allCandles[1].close).not.toBeNull();
        expect(allCandles[1].high).not.toBeNull();
        expect(allCandles[1].low).not.toBeNull();
        expect(allCandles[1].time).not.toBeNull();
      });
  });
});
