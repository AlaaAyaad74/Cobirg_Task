import { Link } from "react-router-dom";
import ScrollLink from "../scroll_Link/CustomScrollLink";
import styles from "./header.module.css";
import { useState } from "react";

import logo from "../../../public/svgs/logo.svg";
function Header() {
  const [collapse, setCollapse] = useState(false);
  return (
    <header>
      <div className={styles.first__row}>
        <img src={logo} alt="logo" className={styles.logo} />
        {/* <img src="./svgs/logo.svg" alt="logo" className={styles.logo} /> */}
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
            <ScrollLink
              className="scroll_link"
              to="ABOUT"
              onClick={() => setCollapse(!collapse)}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="scroll_link"
              to="PROJECTS"
              onClick={() => setCollapse(!collapse)}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="scroll_link"
              to="STUDIO"
              onClick={() => setCollapse(!collapse)}
            >
              Studio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="scroll_link"
              to="BLOG"
              onClick={() => setCollapse(!collapse)}
            >
              Blog
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="scroll_link"
              to="CONTACT"
              onClick={() => setCollapse(!collapse)}
            >
              Contact
            </ScrollLink>
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
