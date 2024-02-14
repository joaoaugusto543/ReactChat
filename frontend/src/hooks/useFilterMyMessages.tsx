import {useLayoutEffect } from "react"
import { UserInterface } from "../interfaces/UserInterface"
import { MessageInterface } from "../interfaces/MessageInterface"

type Props={
    messages:MessageInterface[],
    id:number | undefined,
    setMyMessages:Function,
    user:UserInterface | null,
}

function useFilterMyMessages({messages,id,setMyMessages,user}:Props) {

    useLayoutEffect(()=>{

        if(!id || !user){
          return
        }

        const messagesChat=messages.filter((message)=>{
          if(message.idsUser.includes(id) && message.idsUser.includes(parseInt(user.id))){
            return true
          }
    
          return false
        })
    
        setMyMessages(messagesChat)

    },[messages,id])

}

export default useFilterMyMessages
