
import styles from "./Button.module.css"
import cn from "classnames";
export const Button = ({children,className, ...props}) => {
    return (
        <button className={cn(styles.Button, className)} {...props}>
            {children}
        </button>
    )
}