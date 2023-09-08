const Newspaper = require('../../models/newspaper')
const format = require('date-fns/format')

const splitText = strArr => {
    return strArr[0].split('\r\n')
}
 
module.exports.getNewspaper = async (req, res) => {
    const query = req.query.category
    if (query === undefined) {
        const newspapers = await Newspaper.find().sort({_id: -1}).limit(10)
        res.render('news/newspaper/index', {newspapers, category: query})
    } else {
        const newspapers = await Newspaper.find({category: query}).sort({_id: -1}).limit(10)
        res.render('news/newspaper/index', {newspapers, category:  query})
    }
}

module.exports.getNewForm = (req, res) => {
    res.render('news/newspaper/new', {category: ''})
}

module.exports.postPaper = async (req, res) => {
    const newspaper = new Newspaper(req.body)
    newspaper.date = format(new Date(), 'PPP')
    newspaper.text = splitText(newspaper.text)
    await newspaper.save()
    res.redirect(`/news/newspaper/${newspaper._id}`)
}

module.exports.showPaper = async (req, res) => {
    const { id } = req.params;
    const newspaper = await Newspaper.findById(id)
    res.render('news/newspaper/show', { newspaper, category: newspaper.category })
}