const {Sequelize} = require('sequelize');
module.exports = new Sequelize('players', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    charset: 'utf8',
    collate: 'utf8_general_ci', 
});