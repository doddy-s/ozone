'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('members', {
      memberId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
        field: 'member_id'
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
      communityId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'community_id'
      },
    })

    await queryInterface.addConstraint('members', {
      fields: ['user_id'],
      type: 'foreign key',
      references: {
        table: 'users',
        field: 'user_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    await queryInterface.addConstraint('members', {
      fields: ['community_id'],
      type: 'foreign key',
      references: {
        table: 'communities',
        field: 'community_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('members');
  }
};