import { useCallback } from 'react'

type Props={
    setMessages:Function,
    socket:any,
}

function useAddMessageGroup({setMessages,socket}:Props) {
  
    const addMessage=useCallback(async ()=>

        await socket.on('receive_message_group',async (data:any) =>{

        setMessages((state:any) => [...state,data])
      
        return ()=> socket.off('receive_message_group')
    }),[socket])

    return addMessage

}

export default useAddMessageGroup