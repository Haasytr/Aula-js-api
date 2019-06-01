const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./routes'))

app.listen(3333, error => {
    if(error){
        console.log(error.menssage)
        process.exit(1)
    }

    console.log('Runing at 3333 port...')
})