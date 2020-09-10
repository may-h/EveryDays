const Sequelize = require('sequelize'); 

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

// console.log('hi')
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.paswsword, config);
// console.log(sequelize)
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, require('sequelize/types'));
// db.Admin = require('./admin')(sequelize, Sequelize); 
// db.Payment = require('./payment')(sequelize, Sequelize);

module.exports = db;
