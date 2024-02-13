const Group = require("../models/Groups")
const Notification = require("../models/Notification")

class NotificationController{
       static async createNotification(req,res){
            try {

                //idUser = user to be added
                //user.id = user wants to add

                const {idUser,idGroup}=req.body

                const group=await Group.findOne({raw:true,where:{id:idGroup}})

                const user= req.user

                if(!group){
                    return res.status(422).json({error:'Group not found'})
                }

                if(!group.participants.includes(String(user.id))){
                    return res.status(401).json({error:'Unauthorized'})
                }

                if(!user.contacts.includes(String(idUser))){
                    return res.status(401).json({error:'Unauthorized'})
                }

                if(group.participants.includes(String(idUser))){
                    return res.status(401).json({error:'The user is participating'})
                }

                const newNotification={
                    idUser,
                    publicGroup:group.publicGroup,
                    nameGroup:group.name,
                    idGroup
                }

                await Notification.create(newNotification)

                return res.status(200).json({message:'Created'})

            } catch (error) {
                console.log(error)
                return res.status(500).json({error:'Internal error'})
            }
       } 
}

module.exports=NotificationController