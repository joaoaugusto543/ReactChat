import Api from '../api/Api'
import { CreateNotificationData } from '../interfaces/CreateNotificationData'

export async function getNotifications(token:string){
    try {
        
        Api.defaults.headers.authorization=`Bearer ${token}`
        
        const response=await Api.get('/notification/')
        
        const {data}=response
        
        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

export async function createNotification(notification:CreateNotificationData,token:string){
    try {
        
        Api.defaults.headers.authorization=`Bearer ${token}`
        
        const response=await Api.post('/notification/',notification)
        
        const {data}=response
        
        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

export async function updateView(id:string,token:string){
    try {
        
        Api.defaults.headers.authorization=`Bearer ${token}`
        
        const response=await Api.patch('/notification/',{id})
        
        const {data}=response
        
        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}