import FormGroup from '../../components/FormGroup/FormGroup'
import styles from './CreateGroup.module.css'

function CreateGroup() {
  return (
    <section className={styles.createGroup}>
      <h1>Criar Grupo</h1>
      <FormGroup/>
    </section>
  )
}

export default CreateGroup
