import styles from "./BlogCard.module.css"
export const BlogCard = ({image, title, description}) => {
    return(
        <div className={styles.BlogCard}>
            <img src={image} alt="" className={styles.BlogImage}/>
            <h3 className={styles.BlogTitle}>{title}</h3>
            <p className={styles.BlogDescription}>{description}</p>
        </div>
    )
}