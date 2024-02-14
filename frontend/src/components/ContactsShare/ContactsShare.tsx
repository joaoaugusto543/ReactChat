import useFilterGroupContacts from '../../hooks/useFilterGroupContacts'
import ContactShare from '../ContactShare/ContactShare'
import styles from './ContactsShare.module.css'
import { IoMdCloseCircle } from 'react-icons/io'

type Props={
  setShowContactsShare:Function
}

function ContactsShare({setShowContactsShare}:Props) {

  const contactsShare=useFilterGroupContacts()

  return (
    <section className={styles.contactsShare}>
        <button className={styles.close} onClick={()=>setShowContactsShare(false)}><IoMdCloseCircle /></button>
        <div className={styles.box}>
            <h1>Contatos</h1>
            <div className={styles.contacts}>
              {contactsShare.length !==0 && contactsShare.map((contact)=><ContactShare key={contact.id} setShowContactsShare={setShowContactsShare} contact={contact}/>)}
            </div>
        </div>
    </section>
  )
}

export default ContactsShare
