const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init({
  text: DataTypes.STRING,
  title: DataTypes.STRING
}, { sequelize, modelName: 'posts' })

module.exports = Post
