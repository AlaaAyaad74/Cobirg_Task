import styles from "./blogCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
function BlogCard({ image, title, description }) {
  return (
    <div className={styles.blog_card_cont}>
      <LazyLoadImage src={image} alt={title} />
      {/* <img src={image} alt="" /> */}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default BlogCard;
