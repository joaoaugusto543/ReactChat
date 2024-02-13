import styles from './Home.module.css'
import Bot from '../../assets/bot.png'

function Home() {
  return (
    <section className={styles.home}>
      <h1>&nbsp;Olá, seja bem-vindo ao ReactChat</h1>
      <img src={Bot} alt='robô' />
    </section>
  )
}

export default Home
