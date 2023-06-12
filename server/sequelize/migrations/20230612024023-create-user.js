'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
        field: 'user_id'
      },
      name: {
        type: DataTypes.STRING(32),
        allowNull: true,
        unique: false
      },
      gender: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        unique: false
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
      },
      accountId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'account_id'
      },
      socialId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'account_id'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};