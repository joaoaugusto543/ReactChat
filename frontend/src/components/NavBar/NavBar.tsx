// import { NavLink } from 'react-router-dom'
import Chat from '../../assets/chat.png'
import styles from './NavBar.module.css'
import { useReducer } from 'react'
import useReducerNavBar from '../../hooks/useReducerNavBar'
import {TabState} from '../../interfaces/InterfaceReducerNavBar'
import ButtonsNavBar from '../ButtonsNavBar/ButtonsNavBar'
import FormSearch from '../FormSearch/FormSearch'
import Tab from '../Tab/Tab'

const INITIAL_STATE:TabState={
    placeholder:'Pesquisar contato',
    tab:'contact'
}

function NavBar() {
 
  const reducer=useReducerNavBar()

  const [state,dispatch]=useReducer(reducer,INITIAL_STATE)

  return (
    <nav className={styles.navBar}>
        <h1 className={styles.logo}>
            <img src={Chat} alt='logo' />
            ReactChat
        </h1>
        <FormSearch state={state}/>
        <ButtonsNavBar dispatch={dispatch} state={state}/>
        <Tab state={state}/>
    </nav>
  )
}

export default NavBar
