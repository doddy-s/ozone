const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('community', {
        community_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: true,
            unique: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        }
    }, {
        freezeTableName: true
    })
}