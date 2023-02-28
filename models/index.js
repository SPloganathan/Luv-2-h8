// importing required models
const User = require("./User");
const Category = require("./Category");
const Business = require("./Business");
const Post = require("./Post");
// setting Relationship between User and Post
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// setting Relationship between Category and Business
Category.hasMany(Business, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// setting Relationship between Business and Post
Business.hasMany(Post, {
  foreignKey: "business_id",
  onDelete: "CASCADE",
});

// setting Association between User and Post
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// setting Association between Business and Category
Business.belongsTo(Category, {
  foreignKey: "category_id",
});

// setting Association between User and Comment
Post.belongsTo(Business, {
  foreignKey: "business_id",
});

// exporting models
module.exports = { User, Category, Business, Post };
