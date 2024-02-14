const getNotifications = require('../helpers/getNotifications')
const Group = require('../models/Groups')
const Notification = require('../models/Notification')
const User = require('../models/User')

class NotificationController{
    static async createNotification(req,res){
        try {
            
            //idUser = user to be added
            //user.id = user wants to add

            const {idUser,idGroup}=req.body

            const group=await Group.findOne({raw:true,where:{id:idGroup}})

            const userReq= req.user

            if(!group){
                return res.status(422).json({error:'Group not found'})
            }

            if(!group.participants.includes(String(userReq.id))){
                return res.status(401).json({error:'Unauthorized'})
            }

            if(!userReq.contacts.includes(String(idUser))){
                return res.status(401).json({error:'Unauthorized'})
            }

            if(group.participants.includes(String(idUser))){
                return res.status(401).json({error:'The user is participating'})
            }

            const newNotification={
                idUser:userReq.id,
                publicGroup:group.publicGroup,
                nameGroup:group.name,
                idGroup
            }
 
            const notification = await Notification.create(newNotification)

            const user= await User.findOne({raw:true,where:{id:idUser}})

            user.notifications.push(notification.id)

            await User.update(user,{where:{id:idUser}})

            return res.status(200).json({message:'Created'})

        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }

    } 

    static async getMyNotifications(req,res){
        try {

            const user=req.user

            const notifications = await getNotifications(user.notifications)

            return res.status(200).json(notifications)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async updateView(req,res){
        try {

            const {id}=req.body

            const user=req.user

            if(!user.notifications.includes(String(id))){
                return res.status(401).json({error:'Unauthorized'})
            }

            const notification =await Notification.findOne({raw:true,where:{id}})

            notification.visa=true

            await Notification.update(notification,{where:{id}})

            return res.status(200).json({id})
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }
}

module.exports=NotificationController