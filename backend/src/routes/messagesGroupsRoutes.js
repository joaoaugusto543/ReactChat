const {Router} = require('express')
const auth = require('../helpers/auth')
const handleValidation = require('../helpers/handleValidation')
const { getMessageGroup, createMessageGroup } = require('../controllers/MessageGroupController')
const verifyCreateMessagesGroup = require('../helpers/verifyCreateMessagesGroup')

const routes= new Router()

routes.post('/',auth,verifyCreateMessagesGroup(),handleValidation,createMessageGroup)
routes.get('/:id',auth,getMessageGroup)

module.exports = routes