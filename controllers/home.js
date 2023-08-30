
module.exports.getHome = (req, res) => {
    res.render('salsmedia/home')
}

module.exports.getNews = (req, res) => {
    res.render('salsmedia/news')
}

module.exports.getEntertainment = (req, res) => {
    res.render('salsmedia/entertainment')
}

module.exports.getSports = (req, res) => {
    res.render('salsmedia/sports')
}