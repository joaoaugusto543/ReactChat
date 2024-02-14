import useAddGroup from '../../hooks/useAddGroup'
import useUpdateView from '../../hooks/useUpdateView'
import { notificationInterface } from '../../interfaces/notificationInterface'
import styles from './Notification.module.css'

type Props = {
    notification:notificationInterface
}


function Notification({notification}: Props) {

  const {addGroupPublic,addGroupPrivate}=useAddGroup({id:String(notification.idGroup)})
  const updateView = useUpdateView({id:String(notification.id)})

  async function handleAddGroup(){

    if(notification.publicGroup){
      addGroupPublic()
      updateView()
    }else{
      addGroupPrivate(String(notification.idUser))
      updateView()
    }

  }

  return (
    <div className={styles.notification}>
        <p>Quer entrar no grupo {notification.nameGroup}?</p>
        <div className={styles.buttons}>
            <button onClick={handleAddGroup}>Sim</button>
            <button onClick={updateView}>Não</button>
        </div>
    </div>
  )
}

export default Notification