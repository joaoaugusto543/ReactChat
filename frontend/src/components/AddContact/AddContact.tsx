import { useAppSelector } from '../../store'
import User from '../User/User'
import styles from './AddContact.module.css'
import Search from '../../assets/search.png'
import LoaderAdd from '../Loaders/LoaderAdd/LoaderAdd'
import Empty from '../Empty/Empty'

function AddContact() {

  const {userCode,loading,error}=useAppSelector(state => state.user)

  const {user}=useAppSelector(state => state.user)

  return (
    <div className={styles.addContact}>

      { !userCode && !loading && user && !error &&
          <div className={styles.search}>
            <p>Pesquise o código dos seus amigos</p>
            <img src={Search} alt='search' />
            <p className={styles.code}>seu código: {user.code} </p>
          </div>
      }

      {loading && 
        <LoaderAdd/>
      }

      { userCode && <User userCode={userCode}/>}

      {typeof(error)==='string' && error && !loading && 
        <Empty text='Usuário não encontrado...'/>
      }

    </div>
  )
}

export default AddContact
