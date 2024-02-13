import { useAppSelector } from '../../store'
import Contact from '../Contact/Contact'
import Empty from '../Empty/Empty'
import LoaderChat from '../Loaders/LoaderChat/LoaderChat'
import styles from './Contacts.module.css'

function Contacts() {

   const {user,loading}=useAppSelector(state=>state.user)

  return (
    <>
      {!loading && user?.contacts.length !==0 &&
        <div className={styles.contacts}>
            {user && user.contacts.map((contact)=><Contact contact={contact} key={contact.id}/>)}
        </div>
      }
      {loading && <LoaderChat/>}
      {!loading && user?.contacts.length ===0 &&
        <Empty text='Você não possui contatos...'/>
      }
    </>
  )
}

export default Contacts