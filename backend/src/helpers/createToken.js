const jwt = require('jsonwebtoken')

function createToken(id){
    const secret=process.env.TOKEN_SECRET

    const token=jwt.sign({id},secret,{expiresIn:'7d'})

    return token
}

module.exports=createToken