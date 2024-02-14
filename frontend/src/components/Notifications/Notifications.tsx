import { useAppSelector } from '../../store'
import Empty from '../Empty/Empty'
import LoaderNotification from '../Loaders/LoaderNotification/LoaderNotification'
import Notification from '../Notification/Notification'
import styles from './Notifications.module.css'

function Notifications() {

  const {notifications,loading} = useAppSelector(state => state.notification)

  return (
    <div className={styles.notifications}>
      {notifications && !loading && notifications.map((notification)=><Notification key={notification.id} notification={notification}/>)}
      {loading && <LoaderNotification/>}
      {!loading && notifications.length === 0 && <Empty text='Não possui notificações...'/>}
    </div>
  )
}

export default Notifications
