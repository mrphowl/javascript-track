'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  const passwordMinLen = 8;
  const passwordMaxLen = 32;
  User.init({
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Username cannot be empty."
        }
      },
      // Reference: https://stackoverflow.com/questions/16356856/sequelize-js-custom-validator-check-for-unique-username-password
      unique: {
        args: true,
        msg: 'Username is already in use!'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          msg: `Password must be ${passwordMinLen} to ${passwordMaxLen} characters.`,
          args: [passwordMinLen, passwordMaxLen]
        }
      }
    },
    firstname: {
      type: DataTypes.STRING(50),
      defaultValue: ''
    },
    lastname: {
      type: DataTypes.STRING(50),
      defaultValue: ''
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};