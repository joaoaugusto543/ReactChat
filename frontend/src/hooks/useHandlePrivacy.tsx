import React from 'react'

type Props={
    setPublicGroup:Function
}

function useHandlePrivacy({setPublicGroup}:Props) {

  function handlePrivacy(e:React.BaseSyntheticEvent){
     const value=e.target.value

     if(value === 'public'){
        setPublicGroup(true)
        return
     }

     if(value === 'private'){
        setPublicGroup(false)
        return
     }

     return

  }

  return handlePrivacy

}

export default useHandlePrivacy
