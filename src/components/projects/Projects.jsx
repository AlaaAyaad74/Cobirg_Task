import ProductCard from "../common/ProductCard";
import { projects } from "./data";
import styles from "./projects.module.css";
function Projects() {
  return (
    <section className={styles.projects__section}>
      <h1>What we do?</h1>
      <div className={styles.divide}>
        {projects.map((item) => (
          <ProductCard img={item.image} title={item.title} key={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
