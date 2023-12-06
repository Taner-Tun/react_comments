import styles from "./styles.module.scss";

function Textarea (...props) {
    return(
        <textarea className={styles.textarea} rows={4} {...props}></textarea>
    )
}

export { Textarea };