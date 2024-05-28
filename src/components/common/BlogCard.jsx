import styles from "./blogCard.module.css";

function BlogCard({ image, title, description }) {
  return (
    <div className={styles.blog_card_cont}>
      <img src={image} alt={title} />

      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default BlogCard;
