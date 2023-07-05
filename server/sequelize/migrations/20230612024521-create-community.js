"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("communities", {
      communityId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true,
        unique: true,
        field: "community_id",
      },
      name: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: false,
        field: "name",
      },
      desc: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
        field: "desc",
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("communities");
  },
};
