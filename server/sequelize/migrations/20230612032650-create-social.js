'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('socials', {
      socialId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true,
        unique: true,
        field: 'social_id'
      },
      instagram: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: true,
        field: 'media'
      },
      twitter: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: true,
        field: 'media'
      },
      facebook: {
        type: Sequelize.STRING(32),
        allowNull: true,
        unique: true,
        field: 'media'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at'
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'user_id'
      },
    })

    await queryInterface.addConstraint('socials', {
      fields: ['user_id'],
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'user_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('socials');
  }
};