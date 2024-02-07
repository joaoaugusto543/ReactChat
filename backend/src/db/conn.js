const {Sequelize}= require('sequelize')

const URI= process.env.DB_URI

const sequelize= new Sequelize(URI)

module.exports = sequelize