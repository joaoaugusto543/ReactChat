const {Router} = require('express')
const {createNotification } = require('../controllers/NotificationController')
const auth = require('../helpers/auth')

const routes= new Router()

routes.post('/', auth,createNotification)

module.exports = routes