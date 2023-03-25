import styles from "./layout.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Layout = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>
          Little <span> Lemon</span>
        </span>
        <ul className={  menuIsOpen ? styles.menuWrapper: styles.menuWrapper +' ' + styles.close}>
          <li>
            <Link onClick={() => setMenuIsOpen(false)}  className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuIsOpen(false)} className={styles.link} to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuIsOpen(false)} className={styles.link} to="/reservation">
              {" "}
              Reservation
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className={
            !menuIsOpen ? styles.hamburger_icon : styles.hamburger_close
          }
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
