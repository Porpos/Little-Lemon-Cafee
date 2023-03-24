import styles from "./layout.module.css";
import { Link } from "react-router-dom";
const Layout = (props) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>
          Little <span> Lemon</span>
        </span>
        <ul className={styles.menuWrapper}>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className={styles.link} to='/reservation'> Reservation</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
