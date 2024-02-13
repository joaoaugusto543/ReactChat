import styles from './ConversationHeader.module.css'
import ButtonShare from '../ButtonShare/ButtonShare'
import ButtonInformation from '../ButtonInformation/ButtonInformation'

type Props={
    name:string,
    image:string,
    isGroup:boolean
}

function ConversationHeader({name,image,isGroup}:Props) {

  return (
    <div className={styles.conversationHeader}>
      {isGroup &&
        <div className={styles.buttons}>
          <ButtonShare/>
          <ButtonInformation/>
        </div>
      }
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  )
}

export default ConversationHeader
