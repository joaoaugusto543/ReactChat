const Message = require("../models/Messages")

class MessageController{

    static async getMessages(req,res){
        try {

            //this is the id of the person receiving the message
            
            const {id}=req.params

            const userReq=req.user

            if(!userReq.contacts.includes(String(id))){
                return res.status(401).json({error:'Unauthorized'})
            }

            const messages=await Message.findAll({raw:true,attributes:['text','name','idsUser','supplierUser']})

            const filteredMessages= messages.filter((message)=>{

                if(message.idsUser.includes(parseInt(id)) && message.idsUser.includes(parseInt(userReq.id))){
                    return true
                }

                return false
            })

            return res.status(200).json(filteredMessages)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }

    static async createMessage(req,res) {
        try {


            const {text,idsUser,supplierUser,name}=req.body

            if(idsUser.length !== 2 || !Number.isInteger(idsUser[0]) || !Number.isInteger(idsUser[1])){
                return res.status(422).json({error:'Invalid idsUser'})
            }

            const newMessage={
                text,
                idsUser,
                supplierUser,
                name
            }

            await Message.create(newMessage)

            return res.status(200).json({message:'Created'})
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }
}

module.exports=MessageController