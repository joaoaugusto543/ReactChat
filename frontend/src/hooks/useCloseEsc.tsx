import { useEffect } from "react"

type Props={
    set:Function
}

function useCloseEsc({set}:Props) {

    function closeEsc(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'Escape'){
                set(false)
                return
            }
    
            return
        })
  
    }  

    useEffect(()=>{
        closeEsc()
    },[])

}

export default useCloseEsc
