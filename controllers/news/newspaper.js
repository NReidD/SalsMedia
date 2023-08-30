const Newspaper = require('../../models/newspaper')
const format = require('date-fns/format')
 
module.exports.getNewspaper = async (req, res) => {
    const newspapers = await Newspaper.find().sort({_id: -1}).limit(5)
    res.render('news/newspaper/index', {newspapers})
}

module.exports.getNewForm = (req, res) => {
    res.render('news/newspaper/new')
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
    res.render('news/newspaper/show', { newspaper })
}

const splitText = strArr => {
    return strArr[0].split('\r\n')
}