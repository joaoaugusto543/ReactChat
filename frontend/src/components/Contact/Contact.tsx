import { NavLink } from 'react-router-dom'
import { ContactInterface } from '../../interfaces/ContactInterface'
import styles from './Contact.module.css'

type Props = {
    contact:ContactInterface
}

function Contact({contact}: Props) {

  return (
    <NavLink to={`contact/${contact.id}`} className={({isActive})=> isActive ? `${styles.contact} ${styles.active}` : styles.contact}>
        <img src={contact.profileImage} alt={contact.name} />
        <div>
            <p className={styles.name}>{contact.name}</p>
        </div>
    </NavLink>
  )
}

export default Contact