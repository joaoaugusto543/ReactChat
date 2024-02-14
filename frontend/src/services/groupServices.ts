import Api from '../api/Api'
import { CreateGroupData } from '../interfaces/CreateGroupData'

export async function getMyGroups(token:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response= await Api.get('/group')

        const {data}=response

        return data
        
    } catch (error:any) {

        console.log(error)
        return error.response.data

    }
}


export async function getGroupsPublic(token:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response= await Api.get('/group/public')

        const {data}=response

        return data
        
    } catch (error:any) {

        console.log(error)
        return error.response.data

    }
}

export async function addParticipantInPublicGroup(id:string,token:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response= await Api.patch('/group/public',{id})

        const {data}=response

        return data
        
    } catch (error:any) {

        console.log(error)
        return error.response.data

    }
}

export async function addParticipantInPrivateGroup(id:string,idUser:string,token:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response= await Api.patch('/group/private',{id,idUser})

        const {data}=response

        return data
        
    } catch (error:any) {

        console.log(error)
        return error.response.data

    }
}


export async function filterGroupsPublic(token:string,search:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.get(`/group/filterGroupsPublic/${search}`)

        const {data}=response

        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

export async function filterMyGroups(token:string,search:string){
    try {


        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.get(`/group/filterMyGroups/${search}`)

        const {data}=response

        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}


export async function getGroup(token:string,id:string){
    try {


        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.get(`/group/${id}`)

        const {data}=response

        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

export async function createGroup(group:CreateGroupData,token:string){
    try {

        const formData= new FormData()
        
        const groupFormData=Object.keys(group).forEach(key => formData.append(key,group[key]))

        formData.append('group',JSON.stringify(groupFormData))

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.post('/group/',formData)

        const {data}=response

        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}


