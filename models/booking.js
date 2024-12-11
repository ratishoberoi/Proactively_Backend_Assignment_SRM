const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Booking', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    speakerId: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    timeSlot: { type: DataTypes.STRING, allowNull: false },
  });
};
