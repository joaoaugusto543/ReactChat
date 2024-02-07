import { Link } from 'react-router-dom'
import Chat from '../../assets/chat.png'
import FormLogin from '../../components/FormLogin/FormLogin'
import styles from './Login.module.css'

function Login() {
  
  return (
    <section className={styles.loginPage}>
        <div className={styles.boxLogin}>
            <div className={styles.ad}>
                <h2>Bem-vindo ao ReactChat</h2>
                <img src={Chat} alt='chat' />
                <h3>Realize o login para desfrutar de conversas enriquecedoras</h3>
            </div>
            <div className={styles.formLogin}>
                <h1>Login</h1>
                <FormLogin/>
                <p>Não possui conta? <Link to='/register'>Cadastre-se</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Login
