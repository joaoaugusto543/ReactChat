const {Router} = require('express')
const {createNotification, getMyNotifications, updateView } = require('../controllers/NotificationController')
const auth = require('../helpers/auth')

const routes= new Router()

routes.post('/', auth,createNotification)
routes.get('/', auth,getMyNotifications)
routes.patch('/',auth,updateView)

module.exports = routes