import styles from "./Blog.module.css"
import {BlogCard} from "./BlogCard/BlogCard";

export const Blog = () => {
    return (
        <div className={styles.BlogContainer}>
            <div className={styles.TitlesBlog}>
                <h2 className={styles.BlogHeader}>Наш блог</h2>
                <p className={styles.MoreArticles}>Больше статей</p>
            </div>
            <div className={styles.BlogList}>
            <BlogCard
                image={'https://i.pinimg.com/originals/77/50/e7/7750e7cded9ab7f5e55dc4b953a3e916.jpg'}
                title={'Делаем скидки на всю женскую одежду летнего сезона '}
                description={'Мы запускаем акцию. Готовься к лету. На протяжении всей весны покупайте женские летние вещи со скидками.'}
            />
            <BlogCard
                    image={'https://krasavica.info/uploads/posts/2022-05/1653937664_1-krasavica-info-p-obraz-devushki-v-chernom-plate-devushka-kr-1.jpg'}
                title={'Одежда для всех подруг. Скидки на большие покупки '}
                description={'Мы запускаем акцию. Готовься к лету. На протяжении всей весны покупайте женские летние вещи со скидками.'}
            />
            <BlogCard
                image={'https://img.goodfon.ru/original/2880x1800/e/27/natalie-portman-divan-plate.jpg'}
                title={'Делаем скидки на всю женскую одежду осеннего сезона '}
                description={'Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.'}
            />
            </div>
        </div>
    )
}