const Newspaper = require('./models/newspaper')
const format = require('date-fns/format')
const mongoose  = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/SalsMedia')
    .then(() => {
        console.log('DB CONNECTED')
    })
    .catch(e => {
        console.log('DB CONNECTION ERROR')
        console.log(e)
    })

const splitText = strArr => {
    return strArr[0].split('\r\n')
}

const seedNewspaper = async () => {
    await Newspaper.deleteMany({})
    for (let i = 0; i < 10; i++) {
        const newsSchema = {
            title: 'El Salvador trip',
            author: 'Andrew Castellano', 
            image: 'https://salsreview.com/wp-content/uploads/2023/02/7C55A631-60AB-4ECE-A289-465D52EB00A2.jpeg',
            text: 'This past month, about a dozen Salesianum students flew down to El Salvador, as a part of one of Salesianum’s many bridge trip offerings. The group left early February 5th, landing in San Salvador, the capital of El Salvador. The group spent the first night in the city then making the drive over to Guarjila, a small town about thirty five miles outside of San Salvador. They then spent the next three days there before heading back to San Salvador for their last two nights.\r\nThe purpose of the trip was to learn about the culture and more importantly the recent civil war which left the country brutalized by a twelve year conflict. The conflict ended almost two decades ago however its lasting effects are still present today. The group worked with Crispaz, a non-profit organization that works to connect marginalized communities in El Salvador with communities in the U.S. Mrs. Ontiveros described the trip as a “reverse mission” saying “we aren’t there to solve any problems or rescue anyone, but to simply come and listen and take what we learn back to our homes with us. So that’s what we did; we came and listened and learned.”\r\nDuring their time in Guarjila, the group stayed with gracious local hosts. Mrs. Ontiveros described the locals as “welcoming… They invited us into their homes, their communities and were eager to share their life stories with us. Everyone we spoke to has experienced a lot of hardship- civil war, refugee camps, poverty, gang violence, but that didn’t break their spirits. They were filled with hope and faith.” In addition Mrs. Ontiveros said the food was homemade by the locals, and said it was one of her favorite parts of the trip.\r\nMrs. Ontiveros urges anyone on the verge of going next year stating “I’ve been on a bunch of other BRIDGE trips, but this one was by far the best! If you want to push yourself out of your comfort zone and meet some amazing people in a truly beautiful place, then El Salvador is the trip for you!”',
            category: 'Salesian Scoop'
        }

        const newspaper = new Newspaper(newsSchema)
        newspaper.date = format(new Date(), 'PPP')
        newspaper.text = splitText(newspaper.text)

        await newspaper.save()
        
    }

    mongoose.connection.close()
}

seedNewspaper()