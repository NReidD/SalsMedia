const announcements = require('../../models/announcements.js');


module.exports.getAnnouncements = async (req, res, next) => {

res.render('news/announcements/index.ejs')
}