import { useEffect } from 'react'
import io from 'socket.io-client'

type Props={
    setSocket:Function
}

function useConnSocket({setSocket}:Props) {

    useEffect(()=>{
        const socket=io('http://localhost:3000').connect()
        setSocket(socket)
    
        return ()=>{
          socket.disconnect()
        }
    },[])
    
}

export default useConnSocket
