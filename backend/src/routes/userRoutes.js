const {Router} = require('express')
const { createUser } = require('../controllers/UserController')
const imageUpload = require('../helpers/imageUpload')
const createUserValidation = require('../helpers/createUserValidation')
const handleValidation = require('../helpers/handleValidation')

const routes= new Router()

routes.post('/',imageUpload.single('profileImage'),createUserValidation(), handleValidation, createUser)

module.exports = routes