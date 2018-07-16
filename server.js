require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const url = `mongodb://${process.env.db_user}:${process.env.db_pass}@ds139341.mlab.com:39341/indowira`

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('error while trying connect to db!', err)
    }
    console.log('success connecting to db!')
})

const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.listen(port , () => {
    console.log(`listening on port ${port}`)
})