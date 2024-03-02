import {FaRegStar} from "react-icons/fa";
import {IoBagOutline} from "react-icons/io5";
import styles from "./ProductCard.module.css"
import {Link} from "react-router-dom";

export const ProductCard = ({image, name, price, id}) => {
    return (
        <div className={styles.ProductCard}>
            <div className={styles.IconGroup}>
                <FaRegStar/>
                <IoBagOutline/>
            </div>
            <Link to={`product/${id}`}>
                <img src={image} alt={name} className={styles.ProductCardImg}/>
                <h3 className={styles.ProductCardName}>{name}</h3>
            </Link>
            <p className={styles.ProductCardPrice}>{price} ₽</p>
        </div>
    )
}