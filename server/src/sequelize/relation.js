function applyRelations(sequelize) {
    const { account, comment, community, market, post, social, user } = sequelize.models

    account.hasOne(user, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    user.belongsTo(account)

    community.belongsToMany(user, { through: 'member' })

    user.hasOne(user, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })

    user.hasMany(post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    post.belongsTo(user)

    post.hasMany(comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    comment.belongsTo(post)

    comment.hasMany(comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })

    market.hasOne(post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    post.belongsTo(market)

    user.hasOne(social, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    social.belongsTo(user)
}

module.exports = { applyRelations }