const {Router} = require('express')
const { 

    createGroup, 
    getGroups, 
    addParticipantInPublicGroup , 
    addParticipantInPrivateGroup, 
    getMyGroups, filterMyGroups, 
    filterGroupsPublic, 
    getGroup

} = require('../controllers/GroupController')

const auth = require('../helpers/auth')
const imageUpload = require('../helpers/imageUpload')
const createGroupValidation = require('../helpers/createGroupValidation')
const handleValidation = require('../helpers/handleValidation')

const routes= new Router()

routes.post('/',auth,imageUpload.single('image'),createGroupValidation(),handleValidation,createGroup)
routes.get('/',auth,getMyGroups)
routes.get('/public',auth,getGroups)
routes.patch('/public',auth,addParticipantInPublicGroup)
routes.patch('/private',auth,addParticipantInPrivateGroup)
routes.get('/filterMyGroups/:search',auth,filterMyGroups)
routes.get('/filterGroupsPublic/:search',auth,filterGroupsPublic)
routes.get('/:id',auth,getGroup)

module.exports = routes