const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/movie-db', {
    useNewUrlPaserser: true,
    useCreateIndex: true,
}) 

module.exports = mongoose
