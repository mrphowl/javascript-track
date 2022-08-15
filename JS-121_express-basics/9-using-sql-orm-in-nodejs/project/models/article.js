'use strict';
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = sequelize => {
  class Article extends Sequelize.Model {
    publishedAt() {
      const date = moment(this.createdAt).format('MMMM D, YYYY, h:mma');
      return date;
    }
    shortDescription() {
      const shortDesc = this.body.length > 200 ? this.body.substr(0, 200) + '...' : this.body;
      return shortDesc;
    }
  }
  const titleMaxLen = 30;
  Article.init({
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: 'Title is required.'
        },
        len: {
          msg: `Title must not exceed ${titleMaxLen} characters.`,
          args: [0, titleMaxLen]
        }
      }
    },
    author: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: 'Author is required.'
        }
      }
    },
    body: Sequelize.TEXT
  }, { sequelize });

  return Article;
};
