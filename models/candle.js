const create = (sequelize, DataTypes) => {
  const Candle = sequelize.define('Candle', {
    id: { autoIncrement: true, type: DataTypes.INTEGER, primaryKey: true },
    moeda: DataTypes.STRING,
    periodicidade: DataTypes.STRING,
    open: DataTypes.FLOAT,
    close: DataTypes.FLOAT,
    high: DataTypes.FLOAT,
    low: DataTypes.FLOAT,
    time: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return Candle;
};

module.exports = create;
