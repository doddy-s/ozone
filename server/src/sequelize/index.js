const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mysql://root:FexBtfbjCgtXxpjvdcTW@containers-us-west-178.railway.app:7427/railway')

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

const modelDefiners = [
    require('./model/account.model'),
    require('./model/comment.model'),
    require('./model/community.model'),
    require('./model/market.model'),
    require('./model/post.model'),
    require('./model/social.model'),
    require('./model/user.model')
]

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

// console.log(modelDefiners[0])
// console.log(modelDefiners[0] === sequelize.models.account)
console.log(sequelize.models)

const { applyRelations } = require('./relation')

applyRelations(sequelize)
testConnection()