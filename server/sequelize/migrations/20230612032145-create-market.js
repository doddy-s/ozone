'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('markets', {
      marketId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true,
        unique: true,
        field: 'market_id'
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'price'
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'location'
      },
      postId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'post_id'
      }
    })

    await queryInterface.addConstraint('markets', {
      fields: ['post_id'],
      type: 'foreign key',
      references: {
        table: 'posts',
        field: 'post_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('markets');
  }
};