const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
        }
    }, {
        freezeTableName: true
    })
}