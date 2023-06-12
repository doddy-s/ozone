const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('post', {
        marketId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        location: {
            type: DataTypes.GEOGRAPHY,
            allowNull: false,
            unique: true
        }
    }, {
        freezeTableName: true
    })
}