const {body}=require('express-validator')

function createUserValidation(){
    return[
        body('name')
            .isString()
            .withMessage('Name is required')
            .isLength({max:32,min:3})
            .withMessage('Very long/small name'),
        body('email')
            .isString()
            .withMessage('Email is required'),
        body('password')
            .isString()
            .withMessage('Password is required')
            .isLength({min:7})
            .withMessage('Password too small'),
        body('confirmPassword')
            .isString()
            .withMessage('Confirm password is required')
            .custom((value,{req})=>{

                if(value !== req.body.password){
                    throw new Error('Passwords must be the same')
                }

                return true

            }),
    ]
}

module.exports=createUserValidation