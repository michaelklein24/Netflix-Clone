const Sequelize = require('sequelize');
require('dotenv').config({path: require('find-config')('.env')});

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize("mysql://vuk3qzjagaws7ot4:dujo5hdi68qmsdrg@acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ypew6bbamwz2nprf", {
    host: 'acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    }
  })
} else {

  sequelize = new Sequelize(
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    "netflix_clone",
    "root",
    "1234",
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
// }

module.exports = sequelize;