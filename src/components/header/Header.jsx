import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useState } from "react";

function Header() {
  const [collapse, setCollapse] = useState(false);
  return (
    <header>
      <div className={styles.first__row}>
        <img src="./svgs/logo.svg" alt="logo" className={styles.logo} />
        <div className={styles.sub__Links}>
          <Link to={"/"}>Join as Design Expert</Link>
          <Link to={"/"}>Partner with LAND Interiors</Link>
        </div>
        <Link
          onClick={() => {
            setCollapse(!collapse);
          }}
          id={styles.toggle}
        >
          <img src="./svgs/bars.svg" alt="menu icon" />
        </Link>
      </div>

      <div className={styles.second__row}>
        <ul className={collapse ? styles.active : ""}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Projects</Link>
          </li>
          <li>
            <Link to={"/"}>Studio</Link>
          </li>
          <li>
            <Link to={"/"}>Blog</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
          <li>
            <Link to={"/"}>Join as Design Expert</Link>
          </li>
          <li>
            <Link to={"/"}>Partner with LAND Interiors</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
