import { useState } from 'react'
import { IoIosInformationCircle } from 'react-icons/io'
import GroupInformation from '../GroupInformation/GroupInformation'
import useCloseEsc from '../../hooks/useCloseEsc'

function ButtonInformation() {

  const [showInformation,setShowInformation]=useState<boolean>(false)

  useCloseEsc({set:setShowInformation})

  return (
    <>
        {showInformation && <GroupInformation setShowInformation={setShowInformation}/>}
        <button onClick={()=>setShowInformation(true)}><IoIosInformationCircle/></button>
    </>
  )
}

export default ButtonInformation
