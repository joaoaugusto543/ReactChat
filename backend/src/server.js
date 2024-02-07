const app = require('.')

const sequelize= require('./db/conn')

const server= require('http').createServer(app)

const io = require('socket.io')(server)

const port= process.env.PORT

sequelize.sync().then(()=>{
    server.listen(port, ()=>{
        console.log(`connected to port ${port}`)
    })
}).catch((error)=>console.log(error))
