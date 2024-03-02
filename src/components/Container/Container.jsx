import styles from "./Container.module.css"
import cn from "classnames"
export const Container = ({children, className}) => {
    return(
        <div className={cn(styles.Container, className)}>
            {children}
        </div>
    )
}