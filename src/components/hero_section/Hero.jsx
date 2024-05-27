import { Suspense } from "react";

import styles from "./hero.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
// const image = lazy(() => import("./images/hero.png"));
function Hero() {
  return (
    <section className={styles.hero__container} id="ABOUT">
      <Suspense fallback={<div>loading..</div>}>
        <div className={styles.image__view}>
          <LazyLoadImage src="./images/hero.png" alt="hero image" />
          {/* <img loading="lazy" src="./images/hero.png" alt="hero image" /> */}
        </div>
      </Suspense>
      <div className={styles.card}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Get personalised home interiors</p>
          <h1>in just 50 days</h1>
        </div>
        <Link to={"/"}>SPEAK WITH A ONLINE CONSULTANT</Link>
      </div>
    </section>
  );
}

export default Hero;
