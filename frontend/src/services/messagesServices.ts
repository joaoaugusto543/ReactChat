import Api from '../api/Api'
import { MessageInterface } from '../interfaces/MessageInterface'

export async function createMessages(message:MessageInterface,token:string){
    try {
        
        Api.defaults.headers.authorization=`Bearer ${token}`

        const response=await Api.post('/message/',message)

        const {data}=response

        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}

export async function getMessages(token:string,id:number){
    try {
        
        Api.defaults.headers.authorization=`Bearer ${token}`

        const response=await Api.get(`/message/${id}`)

        const {data}=response

        return data

    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}