const sequelize = require('../db/conn')
const {DataTypes} = require('sequelize')

const User= sequelize.define('User',{
    name:{
        type:DataTypes.STRING,
        required:true
    },
    email:{
        type:DataTypes.STRING,
        required:true,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        required:true
    },
    profileImage:{
        type:DataTypes.STRING,
        required:true,
        defaultValue:'https://res.cloudinary.com/dezsbjgjj/image/upload/v1706144110/p6uv3s57jyfatagksntg.png'
    },
    code:{
        type:DataTypes.STRING,
        required:true
    },
    contacts:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        required:true,
        defaultValue:[]
    },
    groups:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        required:true,
        defaultValue:[]
    },
    notifications:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        required:true,
        defaultValue:[]
    }
})

module.exports=User