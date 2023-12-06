import { useComment } from "../useComment";

import styles from "./styles.module.scss";

function Body() {
    const { comment: { content, replyingTo } } = useComment();
    return (
        <div>
            <p className={styles.content}>
                {replyingTo && (
               <span className={styles.replyingTo}>@{replyingTo}&nbsp;</span>)}
            {content}
        </p>
        </div >
    );
}

export { Body };