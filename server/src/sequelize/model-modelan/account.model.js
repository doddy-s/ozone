const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('account', {
        uuid: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        username: {
            type: DataTypes.STRING(32),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    }, {
        freezeTableName: true
    })
}