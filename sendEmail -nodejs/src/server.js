
const express = require('express')
const app = express()
const initRoutes = require('./routes/web')


app.use(express.urlencoded({extended: true}))


initRoutes(app)


const port = 8017
app.listen(port, () => {
  console.log(`Hello trungquandev.com, I'm running at localhost:${port}/`)
})
