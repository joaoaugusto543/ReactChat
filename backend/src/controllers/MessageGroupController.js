const Group = require('../models/Groups')
const MessageGroups = require('../models/MessageGroups')

class MessageGroupController{

    static async getMessageGroup(req,res){
        try {

            //group id 

            const {id}=req.params

            const user=req.user

            if(!user.groups.includes(String(id))){
                console.log('lope')
                return res.status(401).json({error:'Unauthorized'})
            }

            const messages=await MessageGroups.findAll({raw:true,attributes:['text','name','idGroup','idUser']})

            const filteredMessages= messages.filter((message)=>message.idGroup === parseInt(id))

            return res.status(200).json(filteredMessages)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async createMessageGroup(req,res){
        try {

            const {text,name,idUser,idGroup}=req.body

            const group=await Group.findOne({raw:true,where:{id:idGroup},attributes:['participants']})

            if(!group){
                return res.status(422).json({error:'Group not found'})
            }

            if(!group.participants.includes(String(idUser))){
                return res.status(401).json({error:'Unauthorized'})
            }

            const newMessage={
                text,
                name,
                idGroup,
                idUser
            }

            await MessageGroups.create(newMessage)

            return res.status(200).json({message:'Created'})
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

}

module.exports=MessageGroupController