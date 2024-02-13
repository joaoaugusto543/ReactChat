const {Router} = require('express')
const { createUser, addContact, profile, getUserByCode, filterContacts, getContact } = require('../controllers/UserController')
const imageUpload = require('../helpers/imageUpload')
const createUserValidation = require('../helpers/createUserValidation')
const handleValidation = require('../helpers/handleValidation')
const auth = require('../helpers/auth')

const routes= new Router()

routes.post('/',imageUpload.single('profileImage'),createUserValidation(), handleValidation, createUser)
routes.patch('/',auth,addContact)
routes.get('/',auth,profile)
routes.get('/contact/:id',auth,getContact)
routes.get('/filter/:search',auth,filterContacts)
routes.get('/code/:code',auth,getUserByCode)


module.exports = routes