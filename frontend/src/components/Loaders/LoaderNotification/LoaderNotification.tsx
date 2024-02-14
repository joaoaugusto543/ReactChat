import styles from './LoaderNotification.module.css'

function LoaderNotification() {
  return (
    <div className={styles.loaderNotification}>
        <div className={styles.text}></div>
        <div className={styles.buttons}>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default LoaderNotification
