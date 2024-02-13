import styles from './ConversationForm.module.css'
import { IoIosSend } from 'react-icons/io'

type Props={
  handleSubmit:any,
  setText:Function,
  text:string
}

function ConversationForm({handleSubmit,setText,text}:Props) {

  return (
    <form className={styles.conversationForm} onSubmit={handleSubmit}>
      <label>
        <input type='text' placeholder='Digite sua mensagem' value={text} onChange={(e)=>setText(e.target.value)}/>
      </label>
      <button><IoIosSend/></button>
    </form>
  )
}

export default ConversationForm

