import { MdGroups } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { IoIosNotifications } from 'react-icons/io'
import styles from './ButtonsNavBar.module.css'
import useDispatchNavBar from '../../hooks/useDispatchNavBar'
import { BiSolidContact } from 'react-icons/bi'
import { TabState } from '../../interfaces/InterfaceReducerNavBar'
import { MdGroupAdd } from 'react-icons/md'

type Props={
    state:TabState,
    dispatch:Function
}

function ButtonsNavBar({state,dispatch}:Props) {
  
  const {handleSwitchAddContact,handleSwitchGroups,handleSwitchNotification,handleSwitchToContact,handleSwitchAddGroup}=useDispatchNavBar({dispatch})

  return (
    <div className={styles.buttons}>
        <button className={state.tab==='contact' ? styles.active : styles.disabled} onClick={handleSwitchToContact}>
            <BiSolidContact/>
        </button>
        <button className={state.tab==='groups' ? styles.active : styles.disabled} onClick={handleSwitchGroups}>
            <MdGroups/>
        </button>
        <button className={state.tab==='addContact' ? styles.active : styles.disabled} onClick={handleSwitchAddContact}>
            <IoMdPersonAdd />
        </button>
        <button className={state.tab==='addGroup' ? styles.active : styles.disabled} onClick={handleSwitchAddGroup}>
            <MdGroupAdd/>
        </button>
        <button className={state.tab==='notification' ? styles.active : styles.disabled} onClick={handleSwitchNotification}>
            <IoIosNotifications />
        </button>
    </div>
  )
}

export default ButtonsNavBar
