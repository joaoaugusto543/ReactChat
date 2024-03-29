import Api from '../api/Api'
import { CreateUserData } from '../interfaces/CreateUserData'

export async function createUser(user:CreateUserData){
    try {

        const formData= new FormData()
        
        const userFormData=Object.keys(user).forEach(key => formData.append(key,user[key]))

        formData.append('user',JSON.stringify(userFormData))

        const response = await Api.post('/user',formData)

        const {data}=response

        return data
        
    } catch (error:any) {
        return error.response.data
    }
}

export async function getUserByCode(code:string,token:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.get(`user/code/${code}`)

        const {data}=response

        return data

    } catch (error:any) {
        return error.response.data
    }
}

export async function profile(token:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.get('user/')

        const {data}=response

        return data

    } catch (error:any) {
        return error.response.data
    }
}

export async function addContact(token:string,code:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.patch('user/',{code})

        const {data}=response

        return data

    } catch (error:any) {
        return error.response.data
    }
}

export async function filterContacts(token:string,search:string){
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.get(`user/filter/${search}`)

        const {data}=response

        return data

    } catch (error:any) {
        return error.response.data
    }
}

export async function getContact(token:string,id:string) {
    try {

        Api.defaults.headers.authorization=`Bearer ${token}`

        const response = await Api.get(`user/contact/${id}`)

        const {data}=response

        return data

    } catch (error:any) {
        return error.response.data
    }
    
}


