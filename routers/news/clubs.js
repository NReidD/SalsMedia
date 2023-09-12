const express = require('express')
const router = express.Router({mergeParams: true})
const clubs = require('../../controllers/news/clubs')

router.get('/', clubs.getClubs)
module.exports = router
