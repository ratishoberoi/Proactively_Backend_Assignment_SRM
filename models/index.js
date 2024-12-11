const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('platform_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = require('./user')(sequelize);
const Speaker = require('./speaker')(sequelize);
const Booking = require('./booking')(sequelize);

module.exports = { sequelize, User, Speaker, Booking };
