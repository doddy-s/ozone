'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Post = Comment.hasOne(models.Post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: {
          name: 'commentId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })
      this.User = Comment.hasOne(models.User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: {
          name: 'commentId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })
    }
  }
  Comment.init({
    commentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
      unique: true,
    },
    up: {
      type: DataTypes.INTEGER,
    },
    down: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    media: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    underscored: true
  });
  return Comment;
};
