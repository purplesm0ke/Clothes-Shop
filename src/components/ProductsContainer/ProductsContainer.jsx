import styles from "./ProductsContainer.module.css"

import {ProductCard} from "./ProductCard/ProductCard";

export const ProductsContainer = ({title, products}) => {
    return (
        <section>
            <div className={styles.ProductsContainer}>
                <h2 className={styles.Shoes}>{title}</h2>
                <p className={styles.MoreProducts}>Больше товаров</p>
            </div>
            <div className={styles.ProductCardList}>
                <ProductCard
                    image={"https://tmlider.com/uploads/images/news/tufli12.jpg"}
                    name={"Calipso"}
                    price={4699}
                />
                <ProductCard
                    image={"https://ae04.alicdn.com/kf/S069922966d9545f0849a026faaa28d6fc.jpg"}
                    name={"Yves Saint Laurent"}
                    price={10500}
                />
                <ProductCard
                    image={"https://image.kazanexpress.ru/cfvep9pl7c50240fam80/original.jpg"}
                    name={"Jimmy Choo"}
                    price={7800}
                />
                <ProductCard
                    image={"https://img.joomcdn.net/a4163c91ed4b013e22502ad11de802d217d8b6a1_original.jpeg"}
                    name={"Gucci"}
                    price={11567}
                />
            </div>
        </section>
    )
}