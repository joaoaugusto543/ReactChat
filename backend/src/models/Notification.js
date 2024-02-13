const {DataTypes} = require('sequelize')
const sequelize = require('../db/conn')

const Notification = sequelize.define('Notification',{
    idUser:{
        type:DataTypes.INTEGER,
        required:true
    },
    publicGroup:{
        type:DataTypes.BOOLEAN,
        required:true
    },
    nameGroup:{
        type:DataTypes.STRING,
        required:true
    },
    visa:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    idGroup:{
        type:DataTypes.INTEGER,
        required:true
    }
})

module.exports=Notification