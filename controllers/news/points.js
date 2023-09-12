const points = require('../../models/points.js');


module.exports.getPoints = async (req, res, next) => {

    res.render('news/points/index.ejs')

}