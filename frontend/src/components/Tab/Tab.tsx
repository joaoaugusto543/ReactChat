import { TabState } from '../../interfaces/InterfaceReducerNavBar'

type Props = {
    state:TabState
}

function Tab({state}: Props) {
  return (
    <>
        {state.tab==='contact' && <h1>Contato</h1>}
        {state.tab==='groups' && <h1>Grupos</h1>}
        {state.tab==='addContact' && <h1>add</h1>}
        {state.tab==='notification' && <h1>noti</h1>}
    </>
  )
}

export default Tab