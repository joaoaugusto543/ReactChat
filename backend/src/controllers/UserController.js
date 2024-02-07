const { v4 : uuidv4  } = require('uuid')
const User = require('../models/User')
const cloudinary = require('../helpers/cloudinaryConfig')
const encryptPassword = require('../helpers/encryptPassword')

class UserController{

    static async createUser(req,res){
        try {

            const {name,email,password}=req.body

            const profileImage = req.file

            const userExists=await User.findOne({raw:true,where:{email}})

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

            
            if(profileImage){
                const res=await cloudinary.uploader.upload(profileImage.path)
                newUser.profile_image=res.url
            }
            
            await User.create(newUser)

            const select= await User.findOne({
                attributes:['id','profile_image']
            })

            const {id,profile_image}=select

            const user={
                id,
                name,
                code:finalCode,
                profileImage:profile_image
            }

            return res.status(200).json(user)
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:'Internal error'})
        }
    }
}

module.exports=UserController