import styles from "./statics.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Statistics() {
  return (
    <section className={styles.main__Cont} id="PROJECTS">
      <h1>Why LAND Interiors</h1>
      <div className={styles.statics__container}>
        <div className={styles.sec__icon} style={{ position: "relative" }}>
          <LazyLoadImage
            src="./svgs/calendar.svg"
            alt="calendar"
            style={{ width: "68px", height: "73px" }}
          />
          <LazyLoadImage
            src="./svgs/num.svg"
            alt="num"
            style={{ position: "absolute", top: "34px" }}
          />
          <p>
            50 days or we
            <br />
            pay you rent
          </p>
        </div>
        <div className={styles.sec__icon}>
          <LazyLoadImage
            src="./svgs/home.svg"
            alt="calendar"
            style={{ width: "72px", height: "72px" }}
          />
          <p>
            1500+happy
            <br />
            customers
          </p>
        </div>
        <div className={styles.sec__icon}>
          <img
            src="./svgs/certify.svg"
            alt="certify"
            style={{ width: "62px", height: "62px" }}
          />
          <p>
            300+ design
            <br />
            experties
          </p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
