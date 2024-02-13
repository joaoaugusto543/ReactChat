import { useState } from 'react'
import { IoMdShare } from 'react-icons/io'
import ContactsShare from '../ContactsShare/ContactsShare'
import useCloseEsc from '../../hooks/useCloseEsc'

function ButtonShare() {

  const [showContactsShare,setShowContactsShare]=useState<boolean>(false)

  useCloseEsc({set:setShowContactsShare})

  return (
    <>
      {showContactsShare && <ContactsShare setShowContactsShare={setShowContactsShare}/>}
      <button onClick={()=>setShowContactsShare(true)}><IoMdShare/></button>
    </>
  )
}

export default ButtonShare
