
import { Button } from "../../button";
import { useComment } from "../useComment";

import styles from "./styles.module.scss";

function Header () {
  const {
    currentUser,
    comment: {
      createdAt,
      user: {image,username},
    },
  } = useComment();

  const ownedByCurrentUser = currentUser.username === username;

    return(
       <div className={styles.headerWrapper}>
         <div className={styles.imageWrapper}>
           <img src={image.jpg} alt="username" />
          </div> 
          <h3 className={styles.username}>{username}</h3>
          {ownedByCurrentUser && <span className={styles.youIndicator}>you</span>}
          <div className={styles.createdAt}>{createdAt}</div>
          <div className={styles.actionButtons}>
          {ownedByCurrentUser ? (
          <>
            <Button variant="warning">
              <img src="./images/icon-delete.svg" aria-hidden="true" alt="Delete" />
              Delete
            </Button>
            <Button>
              <img src="./images/icon-edit.svg" aria-hidden="true" alt="Edit" />
              Edit
            </Button>
          </>
        ) : (
          <Button>
            <img src="./images/icon-reply.svg" aria-hidden="true" alt="Reply" />
            Reply
          </Button>
        )}
          </div>
       </div>
    );
}

export { Header };