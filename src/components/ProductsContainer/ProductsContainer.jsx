import styles from "./ProductsContainer.module.css"

import {ProductCard} from "./ProductCard/ProductCard";
import {Slider} from "../Slider/Slider";

export const ProductsContainer = ({title, products}) => {
    return (
        <section>
            <div className={styles.ProductsContainer}>
                <h2 className={styles.Shoes}>{title}</h2>
                <p className={styles.MoreProducts}>Больше товаров</p>
            </div>
            <div className={styles.ProductCardList}>
                {products?.length > 0 && <Slider slidesNumber={4} slides={products}/>}
            </div>
        </section>
    )
}