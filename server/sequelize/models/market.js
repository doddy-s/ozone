'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Market extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Post = Market.belongsTo(models.Post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE'
      })
    }
  }
  Market.init({
    marketId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.GEOGRAPHY,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Market',
    tableName: 'markets',
    underscored: true
  });
  return Market;
};