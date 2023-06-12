'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Social extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Social.init({
    socialId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    instagram: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: true
    },
    twitter: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: true
    },
    facebook: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Social',
    tableName: 'socials',
    underscored: true
  });
  return Social;
};