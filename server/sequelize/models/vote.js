"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.User = Vote.belongsTo(models.User, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "userId",
          type: DataTypes.UUID,
          allowNull: false,
        },
      });

      this.Post = Vote.belongsTo(models.Post, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "postId",
          type: DataTypes.UUID,
          allowNull: true,
        },
      });

      this.Comment = Vote.belongsTo(models.Comment, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "commentId",
          type: DataTypes.UUID,
          allowNull: true,
        },
      });
    }
  }
  Vote.init(
    {
      voteId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
        primaryKey: true,
        unique: true,
      },
      vote: {
        type: DataTypes.BOOLEAN,
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
      modelName: "Vote",
      tableName: "votes",
      underscored: true,
    }
  );
  return Vote;
};
