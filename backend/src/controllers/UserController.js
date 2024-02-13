const { v4 : uuidv4  } = require('uuid')
const cloudinary = require('../helpers/cloudinaryConfig')
const encryptPassword = require('../helpers/encryptPassword')
const User = require('../models/User')
const { Op } = require('sequelize')
const Group = require('../models/Groups')

class UserController{

    static async createUser(req,res){
        try {

            const {name,email,password}=req.body

            const file = req.file

            const userExists=await User.findOne({raw:true,where:{email},attributes:['id']})

            if(userExists){
                return res.status(422).json({error:'User already exists'})
            }

            const encryptedPassword= await encryptPassword(password)

            const generatedCode=uuidv4()

            const finalCode=`#${generatedCode.split('-')[0]}`

            const newUser={
                name,
                email,
                password:encryptedPassword,
                code:finalCode
            }


            if(file){
                const res=await cloudinary.uploader.upload(file.path)
                newUser.profileImage=res.url
            }
            
            await User.create(newUser)

            const select= await User.findOne({
                where:{email},
                attributes:['id','profileImage','code','contacts','groups','notifications']
            })

            const {id,profileImage,code,contacts,groups,notifications}=select

            const user={
                id,
                name,
                code:finalCode,
                profileImage,
                code,
                contacts,
                groups,
                notifications
            }

            return res.status(200).json(user)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async addContact(req,res){
        try {

            const {code}=req.body

            const userReq=req.user

            const user= await User.findOne({raw:true,where:{code},attributes:['id','name','profileImage','contacts']})

            if(!user){
                return res.status(422).json({error:'User not found'})
            }

            if(userReq.contacts.includes(String(user.id))){
                return res.status(422).json({error:'Contact already added'})
            }

            userReq.contacts.push(user.id)
            user.contacts.push(userReq.id)

            const {id:idReq}=userReq
            const {id,name,profileImage} = user
            
            await User.update(userReq,{where:{id:idReq}})
            await User.update(user,{where:{id}})

            const newContact={
                id,
                name,
                profileImage
            }

            return res.status(200).json(newContact)


        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'}) 
        }
    }

    static async profile(req,res){
        try {

            const {contacts,groups}=req.user

            const userContacts=[]

            for(let i=0; contacts.length > i;i++){
                const user=await User.findOne({raw:true,where:{id:contacts[i]},attributes:['id','name','profileImage']})

                userContacts.push(user)
            }

            const groupsObjectArray=[]

            for(let j=0; groups.length > j; j++){

                const group=await Group.findOne({raw:true,where:{id:groups[j]},attributes:['id','name','image']})

                groupsObjectArray.push(group)
            }

            const userUpdated={
                ...req.user,
                contacts:userContacts.reverse(),
                groups:groupsObjectArray.reverse()
            }

            return res.status(200).json(userUpdated)

            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})  
        }

    }

    static async getUserByCode(req,res){
        try {

            const {code}=req.params

            const user= await User.findOne({
                    raw:true,
                    where:{code:`#${code}`},
                    attributes:['name','id','profileImage','code']
                })

            if(!user){
                return res.status(422).json({error:'User not found'})
            }

            return res.status(200).json(user)

        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})  
        }
    }

    static async filterContacts(req,res){

        try {
            
            const {search}=req.params
    
            const {contacts}=req.user
    
            
            const userContacts=[]
            
            for(let i=0; contacts.length > i;i++){
                const user=await User.findOne({raw:true,where:{id:contacts[i]},attributes:['id','name','profileImage']})
                
                userContacts.push(user)
            }
            
            if(search === 'empty'){
                return res.status(200).json(userContacts)
            }
    
            const filteredContacts=userContacts.filter((contact)=>contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
            
            return res.status(200).json(filteredContacts)

        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})  
        }
   
    }

    static async getContact(req,res) {
        try {

            const userReq=req.user

            const {id}=req.params

            const contactExists=userReq.contacts.find((contact)=>contact===id)

            if(!contactExists){
                return res.status(422).json({error:'Contact not found'})
            }
            
            const contact=await User.findOne({raw:true,where:{id},attributes:['id','name','profileImage']})

            return res.status(200).json(contact)

        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})  
        }
    }
}

module.exports=UserController