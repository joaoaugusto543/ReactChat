import { TabAction, TabState } from '../interfaces/InterfaceReducerNavBar'

type Props={
    setSearch:Function
}

function useReducerNavBar({setSearch}:Props) {

  function reducer(_state:TabState,action:TabAction){

        setSearch('')

        switch(action.type){
            case 'CONTACT':
                return{
                    placeholder:'Pesquisar nome do contato',
                    tab:'contact'
                }
            case 'GROUPS':
                return {
                    placeholder:'Pesquisar nome do grupo',
                    tab:'groups'
                }
                
            case 'ADD_CONTACT':
                return {
                    placeholder:'Pesquisar código do usuário',
                    tab:'addContact'
                }

            case 'NOTIFICATION':
                return {
                    placeholder:'Pesquisar notificação',
                    tab:'notification'
                }
            case 'ADD_GROUP':
                return {
                    placeholder:'Pesquisar nome do grupo',
                    tab:'addGroup'
                }
            default:
                throw new Error('Invalid action')
        }

  }

  return reducer

}

export default useReducerNavBar
