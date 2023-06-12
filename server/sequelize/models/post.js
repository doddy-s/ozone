'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.User = Post.belongsTo(models.User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE'
      })
      this.Comment = Post.hasMany(models.Comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE'
      })
      this.Market = Post.hasOne(models.Market, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE'
      })
    }
  }
  Post.init({
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: true
    },
    up: {
      type: DataTypes.INTEGER,
    },
    down: {
      type: DataTypes.INTEGER,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    media: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    underscored: true
  });
  return Post;
};