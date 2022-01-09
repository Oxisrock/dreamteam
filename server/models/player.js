'use strict';
const {
  Model,
  DataTypes,
} = require('sequelize');
const sequelize = require('../sequelize');
module.exports = () => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    country: DataTypes.STRING,
    team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};