const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hero = new Schema(
    {
        name: { type: String, required: true },
        rank: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        imgText: { type: String, required: true }
    }
)

//setting database schema model. Params: (collectionName, schemaName)
module.exports = mongoose.model('heroes', Hero)