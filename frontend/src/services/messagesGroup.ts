import Api from '../api/Api'
import { MessageGroupInterface } from '../interfaces/MessageGroupInterface'

export async function createMessageGroup(message:MessageGroupInterface,token:string){
    try {
        
        Api.defaults.headers.authorization=`Bearer ${token}`

        const response=await Api.post('/messageGroups/',message)

        const {data}=response

        return data

    } catch (error:any) {
        return error.response.data
    }
}

export async function getMessagesGroup(token:string,id:number){
    try {
        
        
        Api.defaults.headers.authorization=`Bearer ${token}`
        
        const response=await Api.get(`/messageGroups/${id}`)
        
        const {data}=response
        
        return data

    } catch (error:any) {
        return error.response.data
    }
}