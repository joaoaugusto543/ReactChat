const {DataTypes} = require('sequelize')
const sequelize = require('../db/conn')

const MessageGroups= sequelize.define('MessageGroups',{
    text:{
        type:DataTypes.STRING,
        required:true
    },
    name:{
        type:DataTypes.STRING,
        required:true
    },
    idGroup:{
        type:DataTypes.INTEGER,
        required:true
    },
    idUser:{
        type:DataTypes.INTEGER,
        required:true
    }
})

module.exports=MessageGroups