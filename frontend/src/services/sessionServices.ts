import Api from '../api/Api'
import { LoginInterface } from '../interfaces/LoginInterface'

export async function login(loginData:LoginInterface){
    try {

        const response= await Api.post('/session',loginData)

        const {data}=response

        return data
        
    } catch (error:any) {
        return error.response.data
    }
}