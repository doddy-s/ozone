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
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'userId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })

      this.Community = Post.belongsTo(models.Community, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'commmunityId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })

      this.Comment = Post.hasMany(models.Comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'postId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })

      this.Market = Post.hasOne(models.Market, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'postId',
          type: DataTypes.UUID,
          allowNull: true
        }
      })
      
    }
  }
  Post.init({
    postId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
      unique: true,
    },
    tag: {
      type: DataTypes.STRING(32),
      allowNull: true,
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
    modelName: 'Post',
    tableName: 'posts',
    underscored: true
  });
  return Post;
};