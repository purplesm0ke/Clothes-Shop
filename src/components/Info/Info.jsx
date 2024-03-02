import styles from "./Info.module.css"
import {BsBox, BsBox2Heart} from "react-icons/bs";
import {IoWomanOutline} from "react-icons/io5";
import {Container} from "../Container/Container";

export const Info = () => {
    return (
        <div className={styles.MainInfo}>
            <Container className={styles.test}>
                <div className={styles.InfoStore}>
                    <h2 className={styles.InfoStoreHeading}>О интернет-магазине Beauty</h2>
                    <p className={styles.InfoText}>Команда Beauty предоставляет услугу доставки только оригинальных
                        товаров c крупнейшего китайского
                        маркетплейса Poizon, чтобы наши клиенты экономили более 40% на каждой покупке. </p>
                    <p className={styles.InfoText}>Работаем без посредников, благодаря чему можем предоставлять лучшую
                        цену. Быстрая, бесплатная
                        доставка.</p>
                    <p className={styles.InfoText}>Сайт, на котором можно будет удобно оформить покупку, не скачивая
                        китайское мобильное приложение
                        Poizon, с удобной фильтрацией огромного количества товаров, а так же с возможностью сразу
                        увидеть
                        окончательную цену товара.</p>
                </div>
                <div className={styles.InfoService}>
                    <div className={styles.InfoDelivery}>
                        <BsBox className={styles.InfoIcon}/>
                        <div className={styles.InfoDeliveryPart}>
                            <p className={styles.InfoBoldText}>Бесплатная доставка до России</p>
                            <p className={styles.InfoText}>Доставим вам заказ абсолютно бесплатно до России</p>
                        </div>

                    </div>
                    <div className={styles.InfoClient}>
                        <IoWomanOutline className={styles.InfoIcon}/>
                        <div className={styles.InfoClientPart}>
                            <p className={styles.InfoBoldText}>мы Работаем без посредников</p>
                            <p className={styles.InfoText}>Между нами и клиентом нет третьего лишнего</p>
                        </div>
                    </div>
                    <div className={styles.InfoBox}>
                        <BsBox2Heart className={styles.InfoIcon}/>
                        <div className={styles.InfoBoxPart}>
                            <p className={styles.InfoBoldText}>простота в заказе и использовании</p>
                            <p className={styles.InfoText}>Для заказа с Poizon не нужно никаких приложений</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}