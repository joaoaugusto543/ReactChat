const {body}=require('express-validator')

function verifyCreateMessage(){
    return[
        body('name')
            .isString()
            .withMessage('Name is required'),
        body('text')
            .isString()
            .withMessage('Text is required')
            .isLength({min:1})
            .withMessage('Invalid text'),
        body('supplierUser')
            .isInt()
            .withMessage('SupplierUser is required')
    ]
}

module.exports=verifyCreateMessage