const {DataTypes}=require('sequelize')
const sequelize= require('../db/conn')

const Group=sequelize.define('Group',{
    name:{
        type:DataTypes.STRING,
        required:true
    },
    publicGroup:{
        type:DataTypes.BOOLEAN,
        required:true
    },
    participants:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        required:true
    },
    description:{
        type:DataTypes.STRING,
        required:true
    },
    image:{
        type:DataTypes.STRING,
        required:true,
        defaultValue:'https://res.cloudinary.com/dezsbjgjj/image/upload/v1707491458/d0ri83x3bu2693kyjicw.png'
    }
})

module.exports=Group