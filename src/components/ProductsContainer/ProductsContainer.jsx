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
                {/*{products?.map(product => <ProductCard key={product.id}*/}
                {/*                                       image={`http://192.168.0.104:5555/${product.image}`}*/}
                {/*                                       price={product.price}*/}
                {/*                                       name={product?.productName}*/}
                {/*/>)}*/}
                {products && <Slider slidesNumber={4} slides={products}/>}
            </div>
        </section>
    )
}