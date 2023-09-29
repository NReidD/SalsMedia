const express = require('express')
const router = express.Router({mergeParams: true})
const newspaper = require('../../controllers/news/newspaper')

router.get('/', newspaper.getNewspaper)

router.route('/post')
    .get(newspaper.getNewForm)
    .post(newspaper.postPaper)

router.route('/:id')
    .get(newspaper.showPaper)

module.exports = router
f