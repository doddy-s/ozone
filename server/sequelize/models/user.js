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
        onUpdate: 'CASCASE'
      })
      this.Community = User.belongsToMany(models.Community, {
        through: 'member'
      })
      this.Post = User.hasMany(models.Post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE'
      })
      this.Comment = User.hasMany(models.Comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE'
      })
    }
  }
  User.init({
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: false
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      unique: false
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true
  });
  return User;
};