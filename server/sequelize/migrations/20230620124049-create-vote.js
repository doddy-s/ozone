"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("votes", {
      voteId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true,
        unique: true,
        field: "vote_id",
      },
      vote: {
        type: Sequelize.BOOLEAN,
        field: "vote",
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
        allowNull: true,
        field: "post_id",
      },
      commentId: {
        type: Sequelize.UUID,
        allowNull: true,
        field: "comment_id",
      },
    });

    await queryInterface.addConstraint("votes", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("votes", {
      fields: ["post_id"],
      type: "foreign key",
      references: {
        table: "posts",
        field: "post_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryInterface.addConstraint("votes", {
      fields: ["comment_id"],
      type: "foreign key",
      references: {
        table: "comments",
        field: "comment_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("votes");
  },
};
