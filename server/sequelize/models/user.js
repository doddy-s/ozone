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
      this.Account = User.belongsTo(models.Account, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'accountId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })

      this.Community = User.belongsToMany(models.Community, {
        through: models.Member,
        foreignKey: 'userId'
      })

      this.Post = User.hasMany(models.Post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'postId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })

      this.Comment = User.hasMany(models.Comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'userId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })

      this.Social = User.hasMany(models.Social, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE',
        foreignKey: {
          name: 'userId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })
      
    }
  }
  User.init({
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: false,
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true
  });
  return User;
};