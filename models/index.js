const User = require('./User.js'), Post = require('./Post.js')

// your relationships go here...
User.hasMany(Post, { foreignKey: 'user_id'})

module.exports = { User, Post}
