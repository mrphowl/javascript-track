'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name cannot be empty.'
        },
        len: {
          args: [1, 32],
          msg: 'Name must not exceed 32 characters.'
        }
      },
      unique: {
        args: true,
        msg: 'Set name is already in use!'
      }
    }
  }, {
    sequelize,
    modelName: 'Set',
  });
  return Set;
};