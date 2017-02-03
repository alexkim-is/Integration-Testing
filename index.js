const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const { PORT } = process.env

const app = express()
  .use(bodyParser.json())
  .use('/notes', router)

app.listen(PORT || 3000, () => {
  console.log(`Listening on port ${PORT || 3000}`)
})
