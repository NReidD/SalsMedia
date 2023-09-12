const express = require('express')
const router = express.Router({mergeParams: true})
const announcements = require('../../controllers/news/announcements')

router.get('/', announcements.getAnnouncements)
module.exports = router
