'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.User = Community.belongsToMany(models.User, {
        through: models.Member,
        foreignKey: 'communityId'
      })
    }
  }
  Community.init({
    communityId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: false,
    },
    desc: {
      type: DataTypes.STRING,
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
    modelName: 'Community',
    tableName: 'Communities',
    underscored: true
  });
  return Community;
};