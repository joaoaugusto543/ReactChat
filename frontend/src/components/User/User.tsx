import styles from './User.module.css'
import { UserCodeInterface } from '../../interfaces/UserCodeInterface'
import { useAppSelector } from '../../store'
import useAddContact from '../../hooks/useAddContact'

type Props={
    userCode:UserCodeInterface
}

function User({userCode}:Props) {

  const {user,loading}=useAppSelector(state => state.user)

  const userAlreadyAdded=user?.contacts.find((contact)=>contact.id === userCode.id)

  const handleAddContact=useAddContact({code:userCode.code})

  return (
    <>
      {user && !loading &&
        <div className={styles.user}>
          <img src={userCode.profileImage} alt={userCode.name} />
          <p>{userCode.name}</p>
          {user.id !== userCode.id  && !userAlreadyAdded ?
            <button onClick={handleAddContact}>Adicionar</button>
            :
            <span className={styles.added}>Adicionado</span>
          }
          
        </div>
      }
    </>
  )
}

export default User
