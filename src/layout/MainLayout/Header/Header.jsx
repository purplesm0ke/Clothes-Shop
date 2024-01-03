import {FaRegStar, FaRegUser, FaSearch, FaShoppingBag} from "react-icons/fa";
import styles from "./Header.module.css"
import {Container} from "../../../components/Container/Container";
import Logo from "../../../assets/icons/logo.svg"

export const Header = () => {
    return (
        <header className={styles.Header}>
            <Container className={styles.test}>
                <img className={styles.Logo} src={Logo} alt=""/>
                <ul className={styles.HeaderList}>
                    <li>Одежда</li>
                    <li>Обувь</li>
                    <li>Аксессуары</li>
                    <li>Бренды</li>
                    <li>Расчет стоимости</li>
                    <li>Информация</li>
                </ul>
                <FaSearch/>
                <FaRegStar/>
                <FaRegUser/>
                <FaShoppingBag/>
                <span>11 899 ₽</span>
            </Container>
        </header>
    )
}