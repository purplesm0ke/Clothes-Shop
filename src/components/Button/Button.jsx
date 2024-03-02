
import styles from "./Button.module.css"
export const Button = ({children, ...props}) => {
    return (
        <button className={styles.Button} {...props}>
            {children}
        </button>
    )
}