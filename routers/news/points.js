const express = require('express')
const router = express.Router({mergeParams: true})
const points = require('../../controllers/news/points')

router.get('/', points.getPoints)
module.exports = router
