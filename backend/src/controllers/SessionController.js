const createToken = require('../helpers/createToken')
const verifyPassword = require('../helpers/verifyPassword')
const User = require('../models/User')

class SessionController{
    static async createSession(req,res){

        try {
            const {email,password}=req.body

            const user= await User.findOne({
                attributes:['name','email','profileImage','id','password','contacts'],
                where:{email}
            })

            if(!user){
                return res.status(422).json({error:'User not found'})
            }

            if(!await verifyPassword(user,password)){
                return res.status(422).json({error:'Authentication problem'})
            }

            const token=createToken(user.id)

            const {name,profileImage,id}=user

            return res.status(200).json({
                user:{
                    name,
                    profileImage,
                    id,
                    email
                },
                token
            })
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }
}

module.exports=SessionController