import { useEffect, useState } from "react"
import { useAppSelector } from "../store"
import { ContactInterface } from "../interfaces/ContactInterface"

function useFilterGroupContacts() {

    const {group}=useAppSelector(state => state.group)
    const {user}=useAppSelector(state => state.user)

    const [contactsShare,setContactsShare]=useState<ContactInterface[]>([])

    useEffect(()=>{
        if(user && group){
            const filteredContacts= user.contacts.filter((contact) => {

                if(group.participants.includes(String(contact.id))){
                    return false
                }

                return true
            })

            setContactsShare(filteredContacts)
        }
    },[user,group])

    return contactsShare

}

export default useFilterGroupContacts
