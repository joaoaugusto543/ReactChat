import BotWithBallon from '../../assets/botWithBallon.png'
import styles from './Empty.module.css'

type Props={
    text:string
}

function Empty({text}:Props) {
  return (
    <div className={styles.empty}>
          <p>{text}</p>
          <img src={BotWithBallon} alt='robô triste' />
    </div>
  )
}

export default Empty
