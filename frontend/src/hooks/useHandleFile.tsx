import React from 'react'

type Props={
    setProfileImage:Function
}

function useHandleFile({setProfileImage}:Props) {
  
    function handleFile(e:React.BaseSyntheticEvent){

        const file : File=e.target.files[0]

        if(file.type!=='image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg'){
            return
        }

        setProfileImage(file)
    }

    return handleFile

}

export default useHandleFile
