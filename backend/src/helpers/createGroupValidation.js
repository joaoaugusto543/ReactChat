const {body}=require('express-validator')

function createGroupValidation(){
    return[
        body('name')
            .isString()
            .withMessage('Name is required')
            .isLength({max:32,min:3})
            .withMessage('Very long/small name'),
        body('publicGroup')
            .isBoolean()
            .withMessage('publicGroup is required'),
        body('description')
            .isString()
            .withMessage('description is required')
            .isLength({min:3})
            .withMessage('description too small'),
        
    ]
}

module.exports=createGroupValidation