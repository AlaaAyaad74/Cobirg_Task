import styles from "./footer.module.css";

import { Link } from "react-router-dom";
function footer() {
  return (
    <footer id="CONTACT">
      <div className={styles.footer_container}>
        <div className={styles.row_One}>
          <img src="./svgs/logo.svg" alt="logo" />
          <p
            className={styles.sub_Title}
            style={{ width: "131px", margin: "0 auto" }}
          >
            Get in touch
          </p>
          <p className={styles.sub_Title}>WHAT WE DO</p>
        </div>
        <div className={styles.second_row}>
          <div>
            <p className={styles.info}>
              We introduce our selves as LAND Interior and Architectural Design
              Consultancy – one of the best interior designers in Chennai.
              Chennai Luxury Interior and Architectural Design Consultancy has
              challenged the conventional way of interior designing and given
              new dimensions to the art of interior designing.
            </p>
            <div className={styles.social}>
              <ul>
                <li>
                  <img src="./svgs/facebook.svg" alt="facebook" />
                </li>
                <li>
                  <img src="./svgs/linkedin.svg" alt="facebook" />
                </li>
                <li>
                  <img src="./svgs/x.svg" alt="facebook" />
                </li>
                <li>
                  <img src="./svgs/youtube.svg" alt="facebook" />
                </li>
                <li>
                  <img
                    style={{ backgroundColor: "#FFFFFFB0", padding: "1px" }}
                    src="./svgs/instagrame.svg"
                    alt="facebook"
                  />
                </li>
              </ul>
            </div>
          </div>
          <ul>
            <li>Interior Design</li>
            <li>Kitchen </li>
            <li>Ceiling</li>
            <li>Bedroom</li>
            <li>Smart Home</li>
          </ul>
          <div className={styles.divide}>
            <ul style={{ margin: "0" }}>
              <li>landinteriors@gmail.com</li>
              <li>+91 98987 65656</li>
            </ul>
            <div className={styles.links}>
              <ul>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Projects</Link>
                </li>
                <li>
                  <Link>Studio</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
