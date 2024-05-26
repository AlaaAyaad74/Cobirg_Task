import ProductCard from "../common/ProductCard";
import { projects } from "./data";
import styles from "./projects.module.css";
function Projects() {
  return (
    <section className={styles.projects__section} id="STUDIO">
      <h1>What we do?</h1>
      <div className={styles.divide}>
        {projects.map((item, index) => (
          <ProductCard img={item.image} title={item.title} key={index} />
        ))}
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </p>
    </section>
  );
}

export default Projects;
