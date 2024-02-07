import { Link } from 'react-router-dom'
import FormRegister from '../../components/FormRegister/FormRegister'
import styles from './Register.module.css'

function Register() {
  return (
    <section className={styles.registerPage}>
        <div className={styles.boxRegister}>
          <h1>Cadastro</h1>
          <FormRegister/>
          <p>Já possui conta? <Link to='/login'>conecte-se</Link></p>
        </div>
    </section>
  )
}

export default Register
