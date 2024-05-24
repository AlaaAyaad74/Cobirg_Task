import PropTypes from "prop-types";
import styles from "./proCard.module.css";
function ProductCard({ img, title }) {
  return (
    <div className={styles.card__container}>
      <img loading="lazy" src={img} alt="product" />
      <h2>{title}</h2>
    </div>
  );
}
ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // Validates img prop as a required string
  // Add validation for other props if needed
};
export default ProductCard;
