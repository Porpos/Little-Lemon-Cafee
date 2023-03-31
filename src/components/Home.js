import styles from './home.module.css'
import { Link } from "react-router-dom";

const Home = () => {
  return(<div className={styles.main_container}>
    <div className={styles.card}>
      <img className={styles.image_big} src='https://static.toiimg.com/thumb/64029527.cms?width=1200&height=900' alt=''/>
      <div>
        <h2>Best Food in Town!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod egestas augue faucibus tempus. Quisque iaculis erat sit amet purus tincidunt pharetra.</p>
        <Link to='/reservation'>Reserve</Link>
      </div>
    </div>
  </div>)
}

export default Home;