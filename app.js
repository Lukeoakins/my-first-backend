const express = require('express')
const app = express()
const fruits = require('./routes/fruitRoutes')

app.use(express.json())
app.use('/fruits', fruits)

app.get('/', (req, res) => {
  res.send('hello fruity!')
})


module.exports = app
