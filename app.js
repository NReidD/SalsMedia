const express = require('express')
const app = express()
const path = require('path')
const homeRouter = require('./routers/home')
const newspaperRouter = require('./routers/news/newspaper')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/SalsMedia')
    .then(() => {
        console.log('DB CONNECTED')
    })
    .catch(e => {
        console.log('DB CONNECTION ERROR')
        console.log(e)
    })

app.use(express.urlencoded({extended: true}))

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', homeRouter)
app.use('/news/newspaper', newspaperRouter)


app.listen(3000, () => {
    console.log('SERVER IS LIVE')
})