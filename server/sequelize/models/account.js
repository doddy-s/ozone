'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.User = Account.hasOne(models.User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCASE'
      })
    }
  }
  Account.init({
    accountId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts',
    underscored: true
  });
  return Account;
};