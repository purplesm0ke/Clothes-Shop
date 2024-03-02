import banner from '../../assets/images/banner.jpg'
import styles from './Banner.module.css'
export const Banner = () => {
    return (
        <div className={styles.Banner_location}>
            <div className={styles.Banner_text_location}>
                <h1 className={styles.Banner_title}>Широкий <br/> ассортимент <br/> Одежды</h1>
                <p className={styles.Banner_text}>Одежда от известные брендов у нас в каталоге. <br/> Только качественные вещи.</p>
                <p className={styles.Banner_btn}>Перейти в каталог</p>
            </div>
        </div>

    )
}