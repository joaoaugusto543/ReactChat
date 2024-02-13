const {body}=require('express-validator')

function verifyCreateMessagesGroup(){
    return[
        body('name')
            .isString()
            .withMessage('Name is required'),
        body('text')
            .isString()
            .withMessage('Text is required')
            .isLength({min:1})
            .withMessage('Invalid text'),
        body('idUser')
            .isInt()
            .withMessage('IdUser is required'),
        body('idGroup')
        .isInt()
        .withMessage('IdGroup is required')
    ]
}

module.exports=verifyCreateMessagesGroup