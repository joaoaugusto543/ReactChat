const Group = require('../models/Groups')

async function getGroups(groups){

    const groupsObjectArray=[]

    for(let i=0; groups.length > i; i++){

        const group=await Group.findOne({raw:true,where:{id:groups[i]},attributes:['id','name','image']})

        groupsObjectArray.push(group)
    }

    return groupsObjectArray
}

module.exports= getGroups