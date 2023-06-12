const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('social', {
        social_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        instagram: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true
        },
        twitter: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true
        },
        facebook: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true
        },
    }, {
        freezeTableName: true
    })
}