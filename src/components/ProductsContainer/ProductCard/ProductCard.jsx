import {FaRegStar} from "react-icons/fa";
import {IoBagOutline} from "react-icons/io5";
import styles from "./ProductCard.module.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../../context/cartContext/CartContext";
import {addToCart} from "../../../context/cartContext/actions/actions";

export const ProductCard = ({image, name, price, id, product}) => {
    const {dispatch, cartList}=useContext(CartContext)
    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }
    const countProductInCart = () => {
        const countProduct = cartList.filter((product)=> product.id===id).length
        return countProduct > 0 ? countProduct : ""
    }
    return (
        <div className={styles.ProductCard}>
            <div className={styles.IconGroup}>
                <FaRegStar/>
                <IoBagOutline onClick={handleAddToCart}/>
                {countProductInCart()}
            </div>
            <Link className={styles.ProductLink} to={`product/${id}`}>
                <img src={image} alt={name} className={styles.ProductCardImg}/>
                <h3 className={styles.ProductCardName}>{name}</h3>
            </Link>
            <p className={styles.ProductCardPrice}>{price} ₽</p>
        </div>
    )
}