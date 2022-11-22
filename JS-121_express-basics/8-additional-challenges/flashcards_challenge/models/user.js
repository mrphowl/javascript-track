'use strict';
const bcrypt = require('bcrypt');
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
  User.init({
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Username is already taken.'
      },
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Username is required.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email is already in use.'
      },
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Email is required.'
        }
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: async (user, options) => {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    sequelize,
    modelName: 'User',
  });
  User.authenticate = async function (username, password, callback) {
    const user = await User.findOne({ where: { username } });

    if (user === null) {
      const err = new Error('User not found');
      err.status = 401;
      return callback(err);
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return callback(null, user);
    } else {
      return callback();
    }
  };
  return User;
};