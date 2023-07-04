"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.User = Member.belongsTo(models.User, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "userId",
          type: DataTypes.UUID,
          allowNull: false,
        },
      });

      this.Community = Member.belongsTo(models.Community, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "communityId",
          type: DataTypes.UUID,
          allowNull: false,
        },
      });
    }
  }
  Member.init(
    {
      memberId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Member",
      tableName: "members",
      underscored: true,
    }
  );
  return Member;
};
