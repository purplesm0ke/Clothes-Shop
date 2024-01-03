import {FaRegStar} from "react-icons/fa";
import styles from "./ProductCard.module.css"
export const ProductCard = ({image, name, price}) => {
    return (
        <div className={styles.ProductCard}>
            <FaRegStar className={styles.Star}/>
            <img src={image} alt={name} className={styles.ProductCardImg}/>
            <h3 className={styles.ProductCardName}>{name}</h3>
            <p className={styles.ProductCardPrice}>{price} ₽</p>
        </div>
    )
}