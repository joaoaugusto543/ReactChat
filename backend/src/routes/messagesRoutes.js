const {Router} = require('express')
const auth = require('../helpers/auth')
const verifyCreateMessage = require('../helpers/verifyCreateMessage')
const { createMessage, getMessages } = require('../controllers/MessageController')
const handleValidation = require('../helpers/handleValidation')

const routes= new Router()

routes.post('/',auth,verifyCreateMessage(),handleValidation,createMessage)
routes.get('/:id',auth,getMessages)

module.exports = routes