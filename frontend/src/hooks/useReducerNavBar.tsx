import { TabAction, TabState } from '../interfaces/InterfaceReducerNavBar'

function useReducerNavBar() {

  function reducer(_state:TabState,action:TabAction){

        switch(action.type){
            case 'CONTACT':
                return{
                    placeholder:'Pesquisar contato',
                    tab:'contact'
                }
            case 'GROUPS':
                return {
                    placeholder:'Pesquisar grupo',
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
            default:
                throw new Error('Invalid action')
        }

  }

  return reducer

}

export default useReducerNavBar
