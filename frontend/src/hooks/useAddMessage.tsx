import { useCallback } from 'react'
import { MessageInterface } from '../interfaces/MessageInterface'

type Props={
    setMessages:Function,
    socket:any,
}

function useAddMessage({setMessages,socket}:Props) {
  
    const addMessage=useCallback(async ()=>

        await socket.on(`receive_message`,async (data:MessageInterface) =>{

        setMessages((state:any) => [...state,data])

        return ()=> socket.off(`receive_message`)

    }),[socket])

    return addMessage

}

export default useAddMessage
