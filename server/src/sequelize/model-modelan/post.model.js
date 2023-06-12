const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('post', {
        post_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tag: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: true
        },
        up: {
            type: DataTypes.INTEGER,
        },
        down: {
            type: DataTypes.INTEGER,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        media: {
            type: DataTypes.STRING(32),
            allowNull: true
        }
    }, {
        freezeTableName: true
    })
}