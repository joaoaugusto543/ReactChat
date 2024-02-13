import { useEffect } from "react"

type Props={
    messages:any[],
    id:number | undefined,
    setMessagesGroup:Function
}

function useFilterMessagesGroup({messages,id,setMessagesGroup}:Props) {

    useEffect(()=>{

        const messagesGroup=messages.filter((message)=>message.idGroup === id)
    
        setMessagesGroup(messagesGroup)
    
    },[messages,id])

}

export default useFilterMessagesGroup
