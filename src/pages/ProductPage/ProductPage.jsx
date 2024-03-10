import {useParams} from "react-router-dom";
import {Header} from "../../layout/MainLayout/Header/Header";
import axios from "axios";
import {useEffect, useState} from "react";
import styles from "./ProductPage.module.css"
import {Button} from "../../components/Button/Button";

export const ProductPage = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState()
    useEffect(() => {
        axios.get(`http://192.168.0.104:5555/product/${productId}`).then((res) => setProduct(res.data))
    }, [])
    return (
        <div>
            <Header/>
            <div className={styles.ProductPlace}>
                <img className={styles.ProductImg} src={`http://192.168.0.104:5555/${product?.image}`} alt=""/>
                <div className={styles.ProductInfo}>
                    <p className={styles.ProductName}>{product?.productName}</p>
                    <p className={styles.ProductPrice}>{product?.price} ₽</p>
                    <p>{product?.description}</p>
                    <Button className={styles.ProductBtn}>Добавить в корзину</Button>
                </div>
            </div>
        </div>
    )
}