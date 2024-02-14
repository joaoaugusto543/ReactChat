import { useEffect } from 'react'
import { UserInterface } from '../interfaces/UserInterface'
import { useNavigate } from 'react-router-dom'

type Props={
    user:UserInterface | null,
    id:string | undefined
}

function useVerifyContact({user,id}:Props) {

    const navigate=useNavigate()

    function verifyContact(){

        if(!user || !id){
            return
        }

        const contact=user.contacts.find((contact)=> String(contact.id) === id)

        if(!contact){
            navigate('/')
            return
        }

        return

    }

    useEffect(()=>{
        verifyContact()
    },[user,id])
}

export default useVerifyContact
