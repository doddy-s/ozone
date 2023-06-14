const express = require('express')
const app = express()
const port = 3000
const sequelize = new Sequelize('account', 'comment', 'community', 'index', 'market', 'member', 'post', 'social', 'user' {
  host: 'localhost',
  dialect: 'mysql'
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})