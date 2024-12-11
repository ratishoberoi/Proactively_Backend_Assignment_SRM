const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Speaker', {
    expertise: { type: DataTypes.STRING, allowNull: false },
    pricePerSession: { type: DataTypes.FLOAT, allowNull: false },
  });
};
