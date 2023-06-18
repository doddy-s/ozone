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
      this.User = Social.belongsTo(models.User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: {
          name: 'userId',
          type: DataTypes.UUID,
          allowNull: false
        }
      })

    }
  }
  Social.init({
    socialId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: true,
      primaryKey: true,
      unique: true,
    },
    instagram: {
      type: Sequelize.STRING(32),
      allowNull: true,
      unique: true,
    },
    twitter: {
      type: Sequelize.STRING(32),
      allowNull: true,
      unique: true,
    },
    facebook: {
      type: Sequelize.STRING(32),
      allowNull: true,
      unique: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }, {
    sequelize,
    modelName: 'Social',
    tableName: 'socials',
    underscored: true
  });
  return Social;
};