import { ContactInterface } from '../../interfaces/ContactInterface'
import { CreateNotificationData } from '../../interfaces/CreateNotificationData'
import { createNotificationThunk } from '../../slices/notificationSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import styles from './ContactShare.module.css'

type Props={
    contact:ContactInterface,
    setShowContactsShare:Function
}

function ContactShare({contact,setShowContactsShare}:Props) {

  const {group} = useAppSelector(state => state.group)
  const {token} =useAppSelector(state => state.auth)

  const dispatch=useAppDispatch()

  function handleAddNotification(){

    if(!group || !contact || !token){
      return
    }

    const newNotification:CreateNotificationData={
      idGroup:parseInt(group.id),
      idUser:parseInt(contact.id)
    }

    dispatch(createNotificationThunk({notification:newNotification,token}))

    setShowContactsShare(false)
  }

  return (
    <div className={styles.contactShare} onClick={handleAddNotification}>
      <img src={contact.profileImage} alt={contact.name} />
      <p>{contact.name}</p>
    </div>
  )
}

export default ContactShare
