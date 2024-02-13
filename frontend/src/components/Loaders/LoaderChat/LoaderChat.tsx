import styles from './LoaderChat.module.css'

function LoaderChat() {
  return (
    <div className={styles.loader}>
      <div className={styles.imageLoader}></div>
      <div>
        <div className={styles.nameLoader}></div>

      </div>
    </div>
  )
}

export default LoaderChat
