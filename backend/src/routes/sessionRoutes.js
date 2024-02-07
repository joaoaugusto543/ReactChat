const {Router} = require('express')
const { createSession } = require('../controllers/SessionController')

const routes= new Router()

routes.post('/', createSession)

module.exports = routes