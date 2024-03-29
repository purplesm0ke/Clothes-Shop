import {FaRegStar} from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import styles from "./ProductCard.module.css"
export const ProductCard = ({image, name, price}) => {
    return (
        <div className={styles.ProductCard}>
            <div className={styles.IconGroup}>
                <FaRegStar/>
                <IoBagOutline/>
            </div>
            <img src={image} alt={name} className={styles.ProductCardImg}/>
            <h3 className={styles.ProductCardName}>{name}</h3>
            <p className={styles.ProductCardPrice}>{price} ₽</p>
        </div>
    )
}