const Notification = require('../models/Notification')

async function getNotifications(notifications){

    const notificationArray=[]

    for(let i=0; notifications.length > i; i++){

        const notification=await Notification.findOne({raw:true,where:{id:notifications[i],visa:false},attributes:['id','idUser','publicGroup','nameGroup','visa','idGroup']})

        if(notification){
            notificationArray.push(notification)
        }
    }

    return notificationArray
}

module.exports=getNotifications