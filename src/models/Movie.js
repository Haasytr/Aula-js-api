const db = require('../database')

const movieSchema = db.Schema({
    Poster: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    imdbID: {
        type: String,
    },
},
    {
    timestamps: true,
    },
)


module.exports = db.model('Movie', movieSchema)