const { Sequelize } = require('sequelize')

module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCALDB_NAME, process.env.LOCALDB_USER, process.env.LOCALDB_PASS,{
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
