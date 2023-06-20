"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      postId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true,
        unique: true,
        field: "post_id",
      },
      tag: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: false,
        field: "tag",
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
      communityId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: "community_id",
      },
    });

    await queryInterface.addConstraint("posts", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("posts", {
      fields: ["community_id"],
      type: "foreign key",
      references: {
        table: "communities",
        field: "community_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts");
  },
};
