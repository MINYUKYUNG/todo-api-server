const { Sequelize, Op, QueryTypes } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const {
  username,
  password,
  database,
  host,
  dialect,
} = config;
const sequelize = new Sequelize(database, username, password, { host, dialect });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Op;
db.QueryTypes = QueryTypes;

db.todos = require('./todos')(sequelize, Sequelize.DataTypes);
db.users = require('./users')(sequelize, Sequelize.DataTypes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('성공 ~');
  })
  .catch((error) => {
    console.log('실패 ~');
    throw error;
  });

module.exports = db;
