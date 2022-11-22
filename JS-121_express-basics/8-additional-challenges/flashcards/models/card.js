'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init({
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Question cannot be empty.'
        }
      }
    },
    hint: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Answer cannot be empty.'
        }
      }
    },
    set: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};