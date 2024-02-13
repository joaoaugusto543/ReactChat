import styles from './LoaderAdd.module.css'

function LoaderAdd() {
  return (
    <div className={styles.loader}>
      <div className={styles.imageLoader}></div>
      <div className={styles.nameLoader}></div>
      <div className={styles.buttonLoader}></div>
    </div>
  )
}

export default LoaderAdd
