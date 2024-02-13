import { CiLogout } from 'react-icons/ci'
import styles from './ButtonLogout.module.css'
import { useAppDispatch } from '../../store'
import { logoutThunk } from '../../slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { resetSuccess } from '../../slices/userSlice'

function ButtonLogout() {

  const dispatch=useAppDispatch()
  const navigate=useNavigate()

  function handleLogout(){
    dispatch(logoutThunk())
    dispatch(resetSuccess())
    navigate('/')
  }

  return (
    <button className={styles.logout} onClick={handleLogout}><CiLogout/>Sair</button>
  )
}

export default ButtonLogout
