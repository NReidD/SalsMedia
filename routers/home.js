const express = require('express')
const router = express.Router()
const home = require('../controllers/home')

router.get('/', home.getHome)

router.get('/news', home.getNews)

router.get('/entertainment', home.getEntertainment)

router.get('/sports', home.getSports)

module.exports = router