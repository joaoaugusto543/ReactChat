import React from 'react'

type Props={
    set:Function
}

function useHandleFile({set}:Props) {
  
    function handleFile(e:React.BaseSyntheticEvent){

        const file : File=e.target.files[0]

        if(file.type!=='image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg'){
            return
        }

        set(file)
    }

    return handleFile

}

export default useHandleFile
