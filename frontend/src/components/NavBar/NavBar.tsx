import Chat from '../../assets/chat.png'
import styles from './NavBar.module.css'
import { useReducer, useState } from 'react'
import useReducerNavBar from '../../hooks/useReducerNavBar'
import {TabState} from '../../interfaces/InterfaceReducerNavBar'
import ButtonsNavBar from '../ButtonsNavBar/ButtonsNavBar'
import FormSearch from '../FormSearch/FormSearch'
import Tab from '../Tab/Tab'
import useFetchUser from '../../hooks/useFetchUser'
import useFetchGroups from '../../hooks/useFetchGroups'
import ButtonLogout from '../ButtonLogout/ButtonLogout'
import useFetchNotifications from '../../hooks/useFetchNotifications'

const INITIAL_STATE:TabState={
    placeholder:'Pesquisar nome do contato',
    tab:'contact'
}

function NavBar() {

  const [search,setSearch]=useState<string>('')

  const reducer=useReducerNavBar({setSearch})

  const [state,dispatch]=useReducer(reducer,INITIAL_STATE)

  useFetchUser()
  useFetchGroups()
  useFetchNotifications()

  return (
    <nav className={styles.navBar}>
        <ButtonLogout/>
        <h1 className={styles.logo}>
            <img src={Chat} alt='logo' />
            ReactChat
        </h1>
        <FormSearch setSearch={setSearch} search={search} state={state}/>
        <ButtonsNavBar dispatch={dispatch} state={state}/>
        <Tab state={state}/>
    </nav>
  )
}

export default NavBar
