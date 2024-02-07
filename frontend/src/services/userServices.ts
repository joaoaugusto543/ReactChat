import Api from '../api/Api'
import { CreateUserData } from '../interfaces/CreateUserData'

export async function createUser(user:CreateUserData){
    try {

        const formData= new FormData()
        
        const userFormData=Object.keys(user).forEach(key => formData.append(key,user[key]))

        formData.append('user',JSON.stringify(userFormData))

        const response = await Api.post('/user',user)

        const {data}=response

        return data
        
    } catch (error:any) {
        console.log(error)
        return error.response.data
    }
}
