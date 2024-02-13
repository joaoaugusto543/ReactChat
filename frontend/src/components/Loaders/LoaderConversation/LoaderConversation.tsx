import styles from './LoaderConversation.module.css'

function LoaderConversation() {
  return (
    <section className={styles.loaderConversation}>
        <div className={styles.header}></div>
        <div className={styles.conversation}>
            <div className={styles.divMessage}>
                <div className={styles.message}></div>
            </div>
            <div className={styles.divMessageReceiver}>
                <div className={styles.messageReceiver}></div>
            </div>
            <div className={styles.divMessage}>
                <div className={styles.message}></div>
            </div>
            <div className={styles.divMessageReceiver}>
                <div className={styles.messageReceiver}></div>
            </div>
        </div>
        <div className={styles.footer}></div>
    </section>
  )
}

export default LoaderConversation
