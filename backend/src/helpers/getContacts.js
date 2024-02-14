const User = require('../models/User')

async function getContacts(contacts){

    const userContacts=[]

    for(let i=0; contacts.length > i;i++){
        const user=await User.findOne({raw:true,where:{id:contacts[i]},attributes:['id','name','profileImage']})

        userContacts.push(user)
    }

    return userContacts
}

module.exports=getContacts