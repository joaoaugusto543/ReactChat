import { ContactInterface } from '../../interfaces/ContactInterface'
import { useAppSelector } from '../../store'
import styles from './ContactShare.module.css'

type Props={
    contact:ContactInterface
}

function ContactShare({contact}:Props) {

  const {group} = useAppSelector(state => state.group)


  function handleAddNotification(){
    console.log(group?.publicGroup)
    console.log(group?.id)
  }

  return (
    <div className={styles.contactShare} onClick={handleAddNotification}>
      <img src={contact.profileImage} alt={contact.name} />
      <p>{contact.name}</p>
    </div>
  )
}

export default ContactShare
