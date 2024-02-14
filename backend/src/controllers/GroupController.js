const Group = require('../models/Groups')
const User = require('../models/User')
const cloudinary = require('../helpers/cloudinaryConfig')
const getGroups = require('../helpers/getGroups')

class GroupController{
    static async createGroup(req,res){
        try {

            const {name,publicGroup,description}=req.body

            const user=req.user

            const file=req.file

            const groupExists=await Group.findOne({raw:true,where:{name},attributes:['name']})

            if(groupExists){
                return res.status(200).json({error:'Group already exists'})
            }
            
            const participants=[user.id]

            const newGroup={
                name,
                publicGroup,
                description,
                participants
            }

            if(file){
                const res= await cloudinary.uploader.upload(file.path)
                newGroup.image=res.url
            }

            await Group.create(newGroup)

            const group=await Group.findOne({raw:true,where:{name},attributes:['id','name','publicGroup','description','image']})

            user.groups=[...user.groups,group.id]

            await User.update(user,{where:{id:user.id}})
            
            return res.status(200).json(group)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async getGroups(req,res){
        try {

            const user=req.user

            const groups=await Group.findAll({raw:true})

            const publicGroups=groups.filter((group)=>group.publicGroup)

            const filterGroups=publicGroups.filter((group)=>!user.groups.includes(String(group.id)))

            return res.status(200).json(filterGroups)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async addParticipantInPublicGroup(req,res){

        try {

            const {id}=req.body

            const group=await Group.findOne({raw:true,where:{id}})

            const user = req.user

            if(!group){
                return res.status(200).json({error:'Group not found'})
            }

            if(!group.publicGroup){
                return res.status(401).json({error:'Unauthorized'})
            }

            if(group.participants.includes(String(user.id))){
                return res.status(422).json({error:'Already a member of the group'})
            }

             user.groups.push(group.id)
             group.participants.push(user.id)

            await Group.update(group,{where:{id}})
            await User.update(user,{where:{id:user.id}})

            const {name,image}=group

            return res.status(200).json({id,name,image})
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async addParticipantInPrivateGroup(req,res){

        try {

            //idUser = id of the person who sent the invitation

            const {id,idUser}=req.body

            const group=await Group.findOne({raw:true,where:{id}})

            const userHost= await User.findOne({raw:true,where:{id:idUser},attributes:['id']})

            const user = req.user

            if(!group){
                return res.status(200).json({error:'Group not found'})
            }

            if(group.publicGroup){
                return res.status(401).json({error:'Unauthorized'})
            }

            if(group.participants.includes(String(user.id))){
                return res.status(422).json({error:'Already a member of the group'})
            }

            if(!group.participants.includes(String(userHost.id))){
                return res.status(422).json({error:'Unauthorized'})
            }

            user.groups.push(group.id)
            group.participants.push(user.id)

            await Group.update(group,{where:{id}})
            await User.update(user,{where:{id:user.id}})

            const {name,image}=group

            return res.status(200).json({id,name,image})
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async getMyGroups(req,res){
        try {

            const {groups}=req.user

            const groupsObjectArray=await getGroups(groups)

            const myGroups=groupsObjectArray.reverse()

            return res.status(200).json(myGroups)

            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})  
        }

    }

    static async filterMyGroups(req,res){

        try {
            
            const {search}=req.params
    
            const {groups}=req.user
            
            const groupsObjectArray=await getGroups(groups)
            
            if(search === 'empty'){
                return res.status(200).json(groupsObjectArray)
            }
    
            const filteredGroups=groupsObjectArray.filter((contact)=>contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
            
            return res.status(200).json(filteredGroups)

        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }

   
    }

    static async filterGroupsPublic(req,res){

        try {

            const {search}=req.params
    
            const user=req.user
    
            const groups=await Group.findAll({raw:true,where:{publicGroup:true}})
    
            const publicGroups=groups.filter((group)=>group.publicGroup)
    
            const filterGroups=publicGroups.filter((group)=>!user.groups.includes(String(group.id)))
            
            if(search === 'empty'){
                return res.status(200).json(groups)
            }
    
            const filteredGroups=filterGroups.filter((contact)=>contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
            
            return res.status(200).json(filteredGroups)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
   
    }

    static async getGroup(req,res) {
        try {

            const {id}=req.params

            const group=await Group.findOne({raw:true,where:{id}})

            const user=req.user

            if(!group){
                return res.status(422).json({error:'Group not found'})
            }

            if(!group.participants.includes(String(user.id))){
                return res.status(401).json({error:'Unauthorized'})
            }

            return res.status(200).json(group)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

}

module.exports=GroupController