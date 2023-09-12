const service = require('../../models/service.js');


module.exports.getService = async (req, res, next) => {

    res.render('news/service/index.ejs')
}