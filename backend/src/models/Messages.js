const {DataTypes} = require('sequelize')
const sequelize = require('../db/conn')

const Message= sequelize.define('Message',{
    text:{
        type:DataTypes.STRING,
        required:true
    },
    name:{
        type:DataTypes.STRING,
        required:true
    },
    idsUser:{
        type:DataTypes.ARRAY(DataTypes.INTEGER),
        required:true
    },
    supplierUser:{
        type:DataTypes.INTEGER,
        required:true
    }
})

module.exports=Message