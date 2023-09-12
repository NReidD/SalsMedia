const express = require('express')
const router = express.Router({mergeParams: true})
const service = require('../../controllers/news/service')

router.get('/', service.getService)
module.exports = router
