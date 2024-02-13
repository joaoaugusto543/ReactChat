const app = require('.')

const sequelize= require('./db/conn')

const server= require('http').createServer(app)

const io = require('socket.io')(server,{cors: {origin: 'http://localhost:5173'}})

const port= process.env.PORT

io.on('connection',socket =>{

    console.log('conectado',socket.id)

    socket.on('message',message => {

        io.emit('receive_message',{
            text:message.text,
            supplierUser:message.supplierUser,
            idsUser:message.idsUser,
            name:message.name

        })
    })

    socket.on('message_group',message => {

        io.emit('receive_message_group',{
            idGroup:message.idGroup,
            name:message.name,
            idUser:message.idUser,
            text:message.text
        })

    })


})


sequelize.sync().then(()=>{
    server.listen(port, ()=>{
        console.log(`connected to port ${port}`)
    })
}).catch((error)=>console.log(error))
