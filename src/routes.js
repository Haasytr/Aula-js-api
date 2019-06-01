const router = require('express').Router()

const MovieController = require('./controller/movieController')


router.get('/', (req, res) => res.send({ api_version: '1.0.0' }))

router.get('/movie', MovieController.index)
router.post('/movie', MovieController.create)

router.get('/movie/:title', MovieController.find)

module.exports = router