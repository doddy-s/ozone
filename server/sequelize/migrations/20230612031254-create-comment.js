"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      commentId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true,
        unique: true,
        field: "comment_id",
      },
      up: {
        type: Sequelize.INTEGER,
        field: "up",
      },
      down: {
        type: Sequelize.INTEGER,
        field: "down",
      },
      content: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        field: "content",
      },
      media: {
        type: Sequelize.STRING,
        allowNull: true,
        field: "media",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at",
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "user_id",
      },
      postId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "post_id",
      },
    });

    await queryInterface.addConstraint("comments", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("comments", {
      fields: ["post_id"],
      type: "foreign key",
      references: {
        table: "posts",
        field: "post_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
