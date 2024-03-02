import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import styles from "./Footer.module.css"
export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterList}>
                <h3>Каталог</h3>
                <p>Одежда</p>
                <p>Обувь</p>
                <p>Аксессуары</p>
                <p>Расчет стоимости</p>
            </div>
            <div className={styles.FooterList}>
                <h3>Информация</h3>
                <p>Блог</p>
                <p>Контакты</p>
                <p>Доставка</p>
                <p>Оплата</p>
                <p>FAQ</p>
            </div>
            <div className={styles.FooterList}>
                <h3>Контакты</h3>
                <p>info@xwear.info</p>
                <p>+7 993 608 38 85</p>
                <p>Мессенджеры</p>
                <div className={styles.Icons}>
                    <FaWhatsapp />
                    <FaTelegram />
                </div>
            </div>
        </footer>
    )
}