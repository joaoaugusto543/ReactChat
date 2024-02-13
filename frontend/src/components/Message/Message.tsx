import styles from './Message.module.css'
import { useAppSelector } from '../../store'

type Props = {
    supplierUser:number,
    name:string,
    text:string
}

function Message({supplierUser,name,text}: Props) {

  const {user}=useAppSelector(state => state.user)

  return (
    <>
        {user &&
            <div className={supplierUser === parseInt(user?.id) ? `${styles.message} ${styles.supplier}` : `${styles.message} ${styles.receive}`}>
                <div className={styles.divMessage}>
                    <span>{name}</span>
                    <p>{text}</p>
                </div>
            </div>

        }
    </>
  )
}

export default Message