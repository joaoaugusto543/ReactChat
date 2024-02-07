const {validationResult}= require('express-validator')

function handleValidation(req,res,next){
    const errors= validationResult(req)

    if(errors.isEmpty()){
        return next()
    }

    const extractErrors=[]

    errors.array().map((error)=>extractErrors.push(error.msg))

    return res.status(422).json({error:extractErrors})
}

module.exports=handleValidation